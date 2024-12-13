<script setup>

</script>

<template>
  <div class="text-center">
    <h2 class="my-2">2048<br>The Remake</h2>
    <div class="container">
      <div class="row mt-4 justify-content-center">
        <div class="col-md-2 my-2">
          <a href="src/classic.html"><button type="button" class="btn gameButton">Classic Mode</button></a>
        </div>
        <div class="col-md-2 my-2">
          <a href="src/limitless.html"><button type="button" class="btn gameButton">Limitless Mode</button></a>
        </div>
        <div class="col-md-2 my-2">
          <a><button disabled='true' type="button" class="btn gameButton">Custom Mode</button></a>
        </div>
        <div class="col-12 my-1" style="color:black">*If color looks unfriendly, play in light mode settings*</div>
      </div>
    </div>
  </div>
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
