<script setup>

</script>

<template>
  <div class="modal fade" id="howToPlay" tabindex="-1" aria-labelledby="howToPlayLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="howToPlayLabel">Instructions</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <div class="my-2"><b>Goal</b>: combine tiles to get “2048”</div>
          <div>EITHER press the arrow keys OR use your keyboard's arrow keys to shift and combine the same tiles</div>
        </div>
        <div class="modal-footer">
          <div class="d-grid mx-auto">
            <button type="button" class="btn gameButton" data-bs-dismiss="modal">Okay!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .gameButton {
        background-color: #53D8FB;
        font-weight: bold;
    }
</style>
