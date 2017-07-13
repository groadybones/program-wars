<template>
  <div>
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" style="border-radius: 30px">
          <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            <h3 class="modal-title">Programming Wars Rules</h3>
            <div>
              <ul class="nav nav-tabs" role="tablist" style="font-size: 22px">
                <li role="presentation" class="active"><a href="#introduction" aria-controls="introduction" role="tab" data-toggle="tab">Introduction</a></li>
                <li role="presentation"><a href="#cardType" aria-controls="cardType" role="tab" data-toggle="tab">Card Type</a></li>
                <li role="presentation"><a href="#gamePlay" aria-controls="gamePlay" role="tab" data-toggle="tab">Game Play</a></li>
                <li role="presentation"><a href="#cardPlayingRules" aria-controls="cardPlayingRule" role="tab" data-toggle="tab">Card Playing Rules</a></li>
                <li role="presentation"><a href="#endOfGame" aria-controls="endOfGame" role="tab" data-toggle="tab">End of Game</a></li>

              </ul>

              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="introduction"><instructions></instructions></div>
                <div role="tabpanel" class="tab-pane" id="cardType"><cardType></cardType></div>
                <div role="tabpanel" class="tab-pane" id="gamePlay"><gameplay></gameplay></div>
                <div role="tabpanel" class="tab-pane" id="cardPlayingRules"><cardPlaying></cardPlaying></div>
                <div role="tabpanel" class="tab-pane" id="endOfGame"><endOfGame></endOfGame></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" style="margin: 5px;">Close</button>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import InstructionRules from '../externalFiles/InstructionRules.vue'
import CardTypeRules from '../externalFiles/CardTypesRules.vue'
import CardPlayingRules from '../externalFiles/CardPlayingRules.vue'
import GameplayRules from '../externalFiles/GameplayRule.vue'
import EndOfGameRules from '../externalFiles/EndOfGameRules.vue'

  export default {
    components: {
      'instructions': InstructionRules,
      'cardType': CardTypeRules,
      'cardPlaying': CardPlayingRules,
      'gameplay': GameplayRules,
      'endOfGame': EndOfGameRules
    }
  }

</script>

<style scoped>
  h5 {
    font-weight: bold;
  }

  h4 {
    font-weight: bold;
  }

  p {
    font-size: medium;
  }

  .tab-pane {
    text-align: left;
  }

  #gamePlay, #cardPlaying {
    font-size: medium;
  }

</style>
