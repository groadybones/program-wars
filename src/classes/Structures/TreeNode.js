export default class Node {
  constructor (value, fC, sC, tC, fourthChild, fifthChild, sixthChild) {
    this.value = {cards: value, scores: []}
    this.children = [fC, sC, tC, fourthChild, fifthChild, sixthChild]
  }
}
