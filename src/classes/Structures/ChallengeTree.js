import Node from './TreeNode'
export default class Tree {

  createTree (input) {
    this.root = new Node(input)
    this.currentNode = root
    this.parentNode = root
    let instIndices
    let level = -1
    while (level < 7) {
      for (let node in currentNode.value.cards.length) {
        if (level === -1) {
          instIndices = this.instructionsIndices()
          ++level
        } else {
          instIndices = undefined
        }
        if (instIndices.length !== 0 && instIndices !== undefined) {
          for (let c = instIndices.length - 1; c >= 0; c--) {
            if (this.currentNode.value.cards[instIndices[c]].type === 'I') {
              this.currentNode.push(new Node(this.currentNode.value.score + this.currentNode.value.cards[instIndices[c]].value))
              this.currentNode.splice(instIndices[c], 1)
            }
          }
        } else if (instIndices.length === 0 && level === 0) {
          console.log('to be implemented, maybe return false')
        } else {
          if (currentNode.value.cards[c].type === 'R' && currentNode.value.score !== 0) {
            for (let repeat in this.parentNode.cards)
            this.parentNode.push(new Node(currentNode.value.score * currentNode.value.cards[c].value))
          }
        }
        this.parentNode = this.currentNode
      }
      level++
    }
  }
  instructionsIndices () {
    let indices = []
    for (card in this.currentNode) {
      if (this.currentNode.value.cards[card].type === 'I') {
        indices.push(card)
      }
    }
    return indices
  }
}
//
// else if (currentNode.value.cards[c].type === 'R' && currentNode.value.score !== 0) {
//   this.currentNode.push(new Node(currentNode.value.score * currentNode.value.cards[c].value))
// }
