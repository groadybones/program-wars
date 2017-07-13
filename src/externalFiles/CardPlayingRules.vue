<template>
  <div>
    <h4>Card Playing Rules</h4>
    <ul id="cardPlaying">
      <li><h5>Instruction Cards</h5>
        <ul><li>Instruction cards are placed to either "True" or "False" side.</li>
        </ul></li>
      <li><h5>Repetition Cards</h5>
        <ul><li>Repetition cards are played on either an Instruction card or a Group card.</li>
          <li>A variable Repetition card (R-x) without a variable card counts as an R-1.</li>
        </ul></li>
      <li><h5>Group Cards</h5>
        <ul><li>A Group card combines one or more stack(s) turning it into a single group card on a single stack</li>
          <li>Group cards cannot be hacked.</li>
        </ul></li>
      <li><h5>Variable Cards</h5>
        <ul><li>Variable cards can only be played on one Repetition-X card.</li>
          <li>Variable cards can be replaced by a Variable card of a higher value. The replaced card
            is put in the discard pile. For example, a V-2 card can be replaced by a V-3
            card.</li>
        </ul></li>
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

  #cardPlaying {
    font-size: medium;
  }
</style>
