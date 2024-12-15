<script setup>
  // Defining props for component
  const props = defineProps(['tiles_table']);
</script>

<template>
  <div style="justify-self: center;">
    <table class="text-center">
      <tbody>
        <tr v-for="(row, index) of props.tiles_table">
          <td v-for="(col, index) of row" :key="index"><div :class="'tiles' + col">{{ col }}</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
  table {
    background-color: #F5DEB3;
  }

  td{
    padding: 5px;
  }

  .tiles {
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #FAEBD7;
    color: #330000;
  }

  .tiles2{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #F7F7EE;
    color: #330000;
  }

  .tiles4{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #EFEEDD;
    color: #330000;
  }

  .tiles8{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #DFD9BB;
    color: #330000;
  }

  .tiles16{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #FFD073;
    color: #ffffff;
  }

  .tiles32{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #FFBF3F;
    color: #ffffff;
  }

  .tiles64{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #FFAA00;
    color: #ffffff;
  }

  .tiles128{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #F79119;
    color: #ffffff;
  }

  .tiles256{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #E67718;
    color: #ffffff;
  }

  .tiles512{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #DD6620;
    color: #ffffff;
  }

  .tiles1024{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #CC4430;
    color: #ffffff;
  }

  .tiles2048{
    width: 55px;
    height: 55px;
    text-align: center;
    align-content: center;
    font-size: large;
    font-weight: 700;

    background-color: #E60000;
    color: #ffffff;
  }
</style>
