<template>
  <div>
    <h4>Card Types</h4>
    <p>There are five types of cards:</p>
    <ul>
      <li><h5>Instruction</h5>
        <p>Instruction cards provide the instructions used to create the
          program. The instruction card is always placed on an empty stack, the
          cards value will be added to your total on the boolean side of its stack.</p></li>
      <li><h5>Repetition</h5>
        <p>Repetition cards allow you to repeat an instructions. This will multiply
          the value of the repetition card and the instruction card (ex. there is an
          I-2 card on the stack, you add an R-3 card, your score for that stack is now 6).
          There are also variable Repetition cards (R-x), they allow to choose the value
          by adding a Variable card to it. Repetition cards may be played on Instruction
          cards or a stack who has been grouped.</p></li>
      <li><h5>Group</h5>
        <p>A Group card lets you combine the cards of one or more stacks.To group
          the cards, the combined value of the stacks must equal the value of
          the Group card. A grouped stack cannot be hacked.</p></li>
      <li><h5>Variables</h5>
        <p>Variable cards are used with the variable Repetition (R-x) cards. You use
          these cards to change the number of times an Instruction or Group card repeats.</p></li>
      <li><h5>Hack</h5>
        <p>Hacking cards allow you to remove one of an opponent’s stack, the
          Hack card cannot be used on a grouped stack.</p></li>
    </ul>
  </div>
</template>

<style>
  h5 {
    font-weight: bold;
  }

  h4 {
    font-weight: bold;
  }

  p {
    font-size: medium;
  }
</style>
