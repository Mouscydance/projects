<script setup>
  import playInfoModal from "@/components/howToPlayModal.vue"
</script>

<template>
  <div class="text-center">
    <h2 class="my-2">2048<br>The Remake</h2>
    <div class="container">
      <div class="row mt-4">
        <div class="col-12">
          <a href="./classic.html"><button type="button" class="btn gameButton">Classic Mode</button></a>
        </div>
        <div class="col-12 mt-2">
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
