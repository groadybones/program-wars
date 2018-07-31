/**
 * @file Deck.js file
 * @author Lance on 2017-03-10.
 */
import Card from './Card'

const instruction1 = 4
const instruction2 = 4
const instruction3 = 4
// const instruction4 = 0;

const repetition2 = 3
const repetition3 = 3
const repetition4 = 3
const repetition5 = 3

const cardDeck = [
  {type: 'I', cardValue: 1, imgSrc: '/static/cardImg/I1.png', howMany: instruction1},
  {type: 'I', cardValue: 2, imgSrc: '/static/cardImg/I2.png', howMany: instruction2},
  {type: 'I', cardValue: 3, imgSrc: '/static/cardImg/I3.png', howMany: instruction3},

  {type: 'R', cardValue: 2, imgSrc: '/static/cardImg/R2.png', howMany: repetition2},
  {type: 'R', cardValue: 3, imgSrc: '/static/cardImg/R3.png', howMany: repetition3},
  {type: 'R', cardValue: 4, imgSrc: '/static/cardImg/R4.png', howMany: repetition4},
  {type: 'R', cardValue: 5, imgSrc: '/static/cardImg/R5.png', howMany: repetition5}
]

/**
 * This is the object representation of the games deck.
 * We use one deck that grows depending on the number of players instead of multiple decks.
 */
export default class Deck {
  /**
   * The constructor for the Deck class
   * @constructor Deck
   */
  constructor () {
    // this.initDeck();
    this.cards = []
    this.discard_cards = []
  };

  /**
   * initDeck function to initialize the deck with a pre determined number and type of cards
   * @memberOf Deck
   */
  initDeck (value) {
    let cardId = 0
    let numChallengeCards = 6
    for (let k = 0; k < value; k++) {
      for (let i = 0; i < numChallengeCards; i++) {
        this.cards.push(new Card(cardId, cardDeck[i].cardValue, cardDeck[i].type, cardDeck[i].imgSrc))
        cardId++
      }
    }
    this.shuffle(this.cards)
  };// end Init game

  /**
   * draw function returns the card at the front (top) of the deck and removes it from the deck
   * @memberOf Deck
   * @returns {Card}
   */
  draw () {
    let card = this.cards[0]// [0] is the top of the deck
    this.cards.shift()// unshift removes the first element.
    return card
  };

  /**
   * shuffle function that will psuedo shuffle the contents of the deck into a random order
   * @memberOf Deck
   */
  shuffle (event) {
    for (let i = event.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [event[i - 1], event[j]] = [event[j], event[i - 1]]
    }
  }
}
