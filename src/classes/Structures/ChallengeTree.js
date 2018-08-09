import Node from './TreeNode'
export default class Tree {

  constructor () {
    this.currentNode = undefined
    this.parentNode = undefined
    this.root = undefined
  }

  createTree (input) {
    this.root = new Node(input)
    this.currentNode = this.root
    this.parentNode = this.root
    let instIndices
    let level = -1
    console.log(JSON.stringify(this.currentNode.value))
    console.log('length ' + JSON.stringify(this.currentNode.value.cards.length))
    // See if theres any instructions in the hand
    if (level === -1) {
      instIndices = this.instructionsIndices()
      ++level
    } else {
      instIndices = undefined
    }
    // if theres any instruction add their values into the roots 'scores' array
    if (instIndices !== undefined) {
      if (instIndices.length !== 0) {
        for (let c = instIndices.length - 1; c >= 0; c--) {
          if (this.currentNode.value.cards[instIndices[c]].type === 'I') {
            this.currentNode.value.scores.push(this.currentNode.value.cards[instIndices[c]].value)
            this.currentNode.value.cards.splice(instIndices[c], 1)
          }
        }
      } else if (instIndices === undefined && level === -1) {
        console.log('to be implemented, maybe return false') // needs to redraw
      }
    }
    // create the first children of the root
    if (this.parentNode.children.length === 0) {
      for (let score in this.currentNode.value.scores) {
        for (let remainingCard in this.currentNode.value.cards) {
          let tempScores = this.currentNode.value.scores.slice(0)
          tempScores[score] += this.currentNode.value.cards[remainingCard].value
          this.currentNode.children.push(new Node(this.currentNode.value.cards.slice(remainingCard), tempScores))
        }
      }
    }
    console.log('parent: ' + JSON.stringify(this.parentNode))
    while (this.currentNode.value.cards.length !== 0) {
      let tempParent = this.parentNode
      for (let child in tempParent.children) {
        // console.log('in the while loop')
        for (let node in this.parentNode.children) {
          console.log('node: ' + node)
          this.currentNode = this.parentNode.children[node]
          // console.log('value: ' + JSON.stringify(this.currentNode.value))
          for (let score in this.currentNode.value.scores) {
            console.log('current score: ' + score)
            for (let remainingCard in this.currentNode.value.cards) {
              console.log('remaining card: ' + JSON.stringify(this.currentNode.value.cards[remainingCard].value))
              let tempScores = this.currentNode.value.scores
              tempScores[score] += this.currentNode.value.cards[remainingCard].value
              this.currentNode.children.push(new Node(this.currentNode.value.cards.slice(remainingCard), tempScores))
            }
          }
        }
        this.parentNode = tempParent.children[child]
        console.log('scores: ' + this.currentNode.value.scores)
        console.log('currentNode: ' + JSON.stringify(this.currentNode.children))
      }
    }
  }

  instructionsIndices () {
    let indices = []
    for (let card in this.currentNode.value.cards) {
      if (this.currentNode.value.cards[card].type === 'I') {
        indices.push(card)
      }
    }
    return indices
  }
}

//
// else if (currentNode.value.cards[c].type === 'R' && currentNode.value.score !== 0) {
//   currentNode.push(new Node(currentNode.value.score * currentNode.value.cards[c].value))
// }
