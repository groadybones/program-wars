export default class Node {
  constructor (value, scores = []) {
    this.value = {cards: value.slice(0), scores: scores, nodeScore: 0}
    this.children = []
  }
}
