<script setup>
  // Defining emits for component
  const props = defineProps(['is_game_over']);
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
    <div class="row justify-content-center mb-2">
      <div class="col-1">
        <a @click="shiftTop()">
          <img src="/arrow.png" id="top"/>
        </a>
      </div>
    </div>
    <div class="row justify-content-evenly">
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
    <div class="row justify-content-center mt-2">
        <div class="col-1">
          <a @click="shiftBottom()">
            <img src="/arrow.png" id="bottom"/>
          </a>
        </div>
    </div> 
  </div>

  <div v-else>
    Game over
  </div>
</template>

<style scoped>
  img {
    width: 40px;
    height: 40px;
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
</style>
