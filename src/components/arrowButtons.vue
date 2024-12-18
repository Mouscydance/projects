<script setup>
  import { refreshPage } from './gameFunc';

  // Defining props and emits for component
  const props = defineProps(['is_game_over', 'win']);
  const emit = defineEmits(['arrow-press']);

  // Shift depends on direction
  function shiftTop() {
    emit('arrow-press', 'top');
  }
  function shiftLeft() {
    emit('arrow-press', 'left');
  }
  function shiftRight() {
    emit('arrow-press', 'right');
  }
  function shiftBottom() {
    emit('arrow-press', 'bottom');
  }

  // For arrow key presses
  document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowUp") {
      shiftTop();
    }
    else if (event.code == "ArrowLeft") {
      shiftLeft();
    }
    else if (event.code == "ArrowRight") {
      shiftRight();
    }
    else if (event.code == "ArrowDown") {
      shiftBottom();
    }
  });
</script>

<template>
  <div v-if="!props.is_game_over" class="container">
    <div class="row justify-content-center mb-md-2 mb-3 pe-4">
      <div class="col-1">
        <a @click="shiftTop()">
          <img src="/arrow.png" id="top"/>
        </a>
      </div>
    </div>
    <div class="row justify-content-evenly pe-4">
      <div class="col-1">
        <a @click="shiftLeft()">
          <img src="/arrow.png" id="left"/>
        </a>
      </div>
      <div class="col-1">
        <a @click="shiftRight()">
          <img src="/arrow.png" id="right"/>
        </a>
      </div>
    </div>
    <div class="row justify-content-center mt-md-2 mt-3 pe-4">
        <div class="col-1">
          <a @click="shiftBottom()">
            <img src="/arrow.png" id="bottom"/>
          </a>
        </div>
    </div> 
    <div class="row">
      <div class="col-12 mt-3 text-center">
          <a href="../index.html"><button type="button" class="btn gameButton">Return Home</button></a>
      </div>
    </div>
  </div>

  <div v-else class="text-center">
    <h5 v-if="props.win==='limitless'">Game over!</h5>
    <h5 v-else-if="!props.win">Game over &#x1F61E;</h5>
    <h5 v-else>You WIN! &#x1F60E;</h5>
    <div class="container">
      <div class="row">
        <div class="col-12 my-1">
          <button type="button" class="btn gameButton" @click="refreshPage()">Retry</button>
        </div>
        <div class="col-12">
          <a href="../index.html"><button type="button" class="btn gameButton">Return Home</button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 45px;
    height: 45px;
  }

  #right {
    transform: rotate(90deg);
  }

  #bottom {
    transform: rotate(180deg);
  }

  #left {
    transform: rotate(-90deg);
  }

  .gameButton {
    background-color: #53D8FB;
    font-weight: bold;
  }

  a:link, a:visited {
    color: #212529;
    text-decoration: none;
  }
</style>
