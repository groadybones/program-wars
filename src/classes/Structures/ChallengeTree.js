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
      if (level === -1) {
        instIndices = this.instructionsIndices()
        ++level
      } else {
        instIndices = undefined
      }
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
    while (level < 6) {
      for (let node in this.parentNode.value.children) {
        console.log('node: ' + node)

        // console.log('value: ' + JSON.stringify(this.currentNode.value))
        for (let score in this.currentNode.value.scores) {
          for (let remainingCard in this.currentNode.value.cards) {
            let tempScores = this.currentNode.value.scores
            tempScores[score] += this.currentNode.value.cards[remainingCard].value
            this.currentNode.value.children.push(new Node(this.currentNode.value.cards.splice(remainingCard, 1), tempScores))
          }
        }
        this.parentNode = this.currentNode
      }
      console.log('scores: ' + this.currentNode.value.scores)
      level = 7
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
