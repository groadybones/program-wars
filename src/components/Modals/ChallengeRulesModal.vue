<template>
  <div>
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content" style="border-radius: 30px">
        <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          <h3 class="modal-title">Programming Wars Objectives</h3>
          <div>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="introduction">
                <h4>Introduction</h4>
                <p style="font-size: 16px">Thanks for playing the Challenge Mode!</p>
                <p> In challenge mode you will be tasked at creating a program with the 6 provided cards.</p>
                <br>
                <h4>Playing the Game</h4>
                <p>
                  6 random cards will be drawn and you will be challenged at achieving the score limit with the cards given.
                </p>
              </div>
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

  export default {
  }

</script>

