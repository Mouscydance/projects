<script setup>
  // Defining props for component
  const props = defineProps(['tiles_table']);
</script>

<template>
  <div style="justify-self: center;">
    <table class="text-center">
      <tbody>
        <tr v-for="(row, index) of props.tiles_table">
          <td v-for="(col, index) of row" :key="index"><div class="tiles" :id="'tiles' + col">{{ col }}</div></td>
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
    }
  
  @media (max-width:768px){
    .tiles {
      width: 50px;
      height: 50px;
    }
  }
  
  #tiles {
    background-color: #FAEBD7;
    color: #330000;
  }

  #tiles2{
    background-color: #F7F7EE;
    color: #330000;
  }

  #tiles4{
    background-color: #EFEEDD;
    color: #330000;
  }

  #tiles8{
    background-color: #DFD9BB;
    color: #330000;
  }

  #tiles16{
    background-color: #FFD073;
    color: #ffffff;
  }

  #tiles32{
    background-color: #FFBF3F;
    color: #ffffff;
  }

  #tiles64{
    background-color: #FFAA00;
    color: #ffffff;
  }

  #tiles128{
    background-color: #F79119;
    color: #ffffff;
  }

  #tiles256{
    background-color: #E67718;
    color: #ffffff;
  }

  #tiles512{
    background-color: #DD6620;
    color: #ffffff;
  }

  #tiles1024{
    background-color: #CC4430;
    color: #ffffff;
  }

  #tiles2048{
    background-color: #E60000;
    color: #ffffff;
  }

  #tiles4096{
    background-color: #808080;
    color: #ffffff;
  }

  #tiles8192{
    background-color: #606060;
    color: #ffffff;
  }

  #tiles16384{
    background-color: #404040;
    color: #ffffff;
    font-size: medium;
  }

  #tiles32768{
    background-color: #202020;
    color: #ffffff;
    font-size: medium;
  }

  #tiles65536{
    background-color: #000000;
    color: #ffffff;
    font-size: medium;
  }

  #tiles131072{
    background-color: #CBC3E3;
    color: #ffffff;
    font-size: small;
  }

  #tiles262144{
    background-color: #E0B0FF;
    color: #ffffff;
    font-size: small;
  }

  #tiles524288{
    background-color: #CF9FFF;
    color: #ffffff;
    font-size: small;
  }

  #tiles1048576{
    background-color: #DA70D6;
    color: #ffffff;
    font-size: small;
  }

  #tiles2097152{
    background-color: #800080;
    color: #ffffff;
    font-size: small;
  }

  #tiles4194304{
    background-color: #ECFEEA;
    color: #330000;
    font-size: small;
  }

  #tiles8388608{
    background-color: #DDFEDA;
    color: #330000;
    font-size: small;
  }

  #tiles16777216{
    background-color: #CFFECA;
    color: #330000;
    font-size: smaller;
  }

  #tiles33554432{
    background-color: #B1FDAA;
    color: #330000;
    font-size: smaller;
  }

  #tiles67108864{
    background: linear-gradient(0deg, red, orange, yellow, green, blue, indigo, violet, red);
    color: #FFFFFF;
    font-size: x-small;
  }
</style>
