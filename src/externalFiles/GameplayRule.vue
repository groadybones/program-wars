<template>
  <div>
    <h4>Game Play</h4>
    <p>On your turn, you do the following:</p>
    <ul id="gamePlay">
      <li>Draw a card from the draw pile.<br/>
        ○ If there are no more cards in the draw pile, the discarded pile is shuffled and reused.</li>
      <li>Add a card to either the "True" or "False" side.<br/>
        ○ If you cannot play a card, discard a card from your hand.</li>
      <li>At the end of everyone’s turn, the Boolean coin is flipped to determine the active side.<br/>
        ○ If the Boolean coin is “True”, the stacks on the "True" side
        are ‘running’ to give your current total.<br/>
        ○ If the Boolean coin is “False”, the stacks on the "False" side
        are ‘running’ to give your current total.</li>
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
