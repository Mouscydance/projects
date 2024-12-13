<script setup>
  import playInfoModal from "@/components/howToPlayModal.vue"
</script>

<template>
  <div class="text-center">
    <h2 class="my-2">2048<br>The Remake</h2>
    <div class="container">
      <div class="row mt-4 justify-content-center">
        <div class="col-2">
          <a href="src/classic.html"><button type="button" class="btn gameButton">Classic Mode</button></a>
        </div>
        <div class="col-2">
          <a href="src/limitless.html"><button type="button" class="btn gameButton">Limitless Mode</button></a>
        </div>
        <div class="col-2">
          <a><button disabled='true' type="button" class="btn gameButton">Custom Mode</button></a>
        </div>
        <div class="col-12 mt-3">
          <button type="button" class="btn gameButton" data-bs-toggle="modal" data-bs-target="#howToPlay">How to play?</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Info Modal -->
  <playInfoModal></playInfoModal>
</template>

<style scoped>
  .gameButton {
    background-color: #53D8FB;
    font-weight: bold;
  }

  a:link, a:visited {
    color: #212529;
    text-decoration: none;
  }
</style>
