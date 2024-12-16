<script setup>
  import { ref, reactive } from "vue";
  import playInfoModal from "@/components/howToPlayModal.vue";
  import playingArea from "@/components/playingArea.vue";
  import arrowButtons from "@/components/arrowButtons.vue";
  import customSettingsModal from "./components/customSettings.vue";

  // import functions
  import { randomSpawn, mergeTiles, checkList, isTableFull, createTable, refreshPage, have2048 } from '@/components/gameFunc.js'

  // Table variables
  var ROW = ref(4);
  var COL = ref(5);

  // Highest tile variable
  var WIN_TILE_NO = "2048";
  // Two of the tiles to spawn in
  var first_no = "2";
  var second_no = "4";

  // Tiles reflect where they are in the table
  var tiles_table = reactive([
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""],
  ]);

  // Score variable
  var score = ref(0);

  // Handle if should spawn tile
  var shouldSpawn = false;

  // Handle if game is over
  var gameOver = ref(false);
  var didYouWin = ref('limitless');
  var isGameModeLimitless = ref(true)

  // Determine if he / she has configured the settings
  var customSettings = ref(false);
  
  function beginning() {
    // This will always activate when first created
    randomSpawn(ROW, COL, tiles_table, first_no, second_no);
    randomSpawn(ROW, COL, tiles_table, first_no, second_no);
  }

  function customisedParams(row, col, highest_tile, two_tile_no) {
    // Ensures all customised parameters are saved
    
    ROW = row;
    COL = col;
    customSettings.value = true;
    if (highest_tile !== "limitless") {
      didYouWin = ref(false);
      WIN_TILE_NO = highest_tile;
      isGameModeLimitless = ref(false)
    }
    else {
      didYouWin = ref('limitless');
      isGameModeLimitless = ref(true)
    }

    // Figure out which one is smaller than other
    two_tile_no = two_tile_no.toSorted((a , b) => a - b);
    first_no = two_tile_no[0];
    second_no = two_tile_no[1];

    // Create customised table
    tiles_table = reactive(createTable(ROW, COL))
    
    beginning();

    return
  }

  function shiftTiles(direction) {
    // Check if not game over
    if (!gameOver.value) {
      // Based on 'direction', shift tile
      if (direction == "top") {
        for (let y = 0; y < COL; y++) {
          var temp = [];
          var merge = "";
          // For special rule condition
          var original_row = [];
          for (let x = 0; x < ROW; x++) {
            if (tiles_table[x][y] !== "") {
              temp.push(tiles_table[x][y]);
            }
            original_row.push(tiles_table[x][y]);
          }
          for (let i = temp.length; i < ROW; i++) {
            temp.push("");
          }
          
          merge = mergeTiles(score, shouldSpawn, temp);

          var index = 0;
          while (index < merge.length) {
            tiles_table[index][y] = merge[index];
            index++;
          }
          while (index < ROW) {
            tiles_table[index][y] = "";
            index++;
          }

          if (!checkList(original_row, merge)) {
            shouldSpawn = true;
          }
        }
      }
      else if (direction == 'bottom') {
        for (let y = 0; y < COL; y++) {
          var temp = [];
          var merge = "";
          // For special rule condition
          var original_row = [];
          for (let x = ROW - 1; x > -1 ; x--) {
            if (tiles_table[x][y] !== "") {
              temp.push(tiles_table[x][y]);
            }
            original_row.push(tiles_table[x][y])
          }
          for (let i = temp.length; i < ROW; i++) {
            temp.push("");
          }

          merge = mergeTiles(score, shouldSpawn, temp);

          var index = 0;
          while (index < merge.length) {
            tiles_table[ROW - index - 1][y] = merge[index];
            index++;
          }
          while (index < ROW) {
            tiles_table[ROW - index - 1][y] = "";
            index++;
          }

          if (!checkList(original_row, merge)) {
            shouldSpawn = true;
          }
        }
      }
      else if (direction == 'right') {
        for (let x = 0; x < ROW; x++) {
          var temp = [];
          var merge = "";
          // For special rule condition
          var original_row = [];
          for (let y = COL - 1; y > -1 ; y--) {
            if (tiles_table[x][y] !== "") {
              temp.push(tiles_table[x][y]);
            }
            original_row.push(tiles_table[x][y])
          }
          
          for (let i = temp.length; i < COL; i++) {
            temp.push("");
          }

          merge = mergeTiles(score, shouldSpawn, temp);

          var index = 0;
          while (index < merge.length) {
            tiles_table[x][COL - index - 1] = merge[index];
            index++;
          }
          while (index < COL) {
            tiles_table[x][COL - index - 1] = "";
            index++;
          }

          if (!checkList(original_row, merge)) {
            shouldSpawn = true;
          }
        }
      }
      else if (direction == 'left') {
        for (let x = 0; x < ROW; x++) {
          var temp = [];
          var merge = "";
          // For special rule condition
          var original_row = [];
          for (let y = 0; y < COL ; y++) {
            if (tiles_table[x][y] !== "") {
              temp.push(tiles_table[x][y]);
            }
            original_row.push(tiles_table[x][y])
          }
          
          for (let i = temp.length; i < COL; i++) {
            temp.push("");
          }

          merge = mergeTiles(score, shouldSpawn, temp);

          var index = 0;
          while (index < merge.length) {
            tiles_table[x][index] = merge[index];
            index++;
          }
          while (index < COL) {
            tiles_table[x][index] = "";
            index++;
          }

          if (!checkList(original_row, merge)) {
            shouldSpawn = true;
          }
        }
      }

      if (didYouWin.value !== "limitless") {
        if (have2048(ROW, COL, tiles_table, WIN_TILE_NO)) {
          gameOver.value = true;
          didYouWin.value = true;
          return;
        }
      }

      // Make it look more 'animated'
      if (shouldSpawn) {
        setTimeout(() => {
          randomSpawn(ROW, COL, tiles_table, first_no, second_no);
          if (isTableFull(ROW, COL, tiles_table)) {
            gameOver.value = true;
            return;
          };
          shouldSpawn = false;
          return;
        }, 30);
      };
    };
  };
</script>

<template>
  <div v-if="!customSettings">
    <div class="text-center">
      <h4>Select your settings!</h4>
      <div class="mx-auto mt-md-1">
        <a href="../index.html"><button type="button" class="btn gameButton">Return Home</button></a>
      </div>
    </div>
    <!-- Below are all the settings-->
    <customSettingsModal
      @set-up-settings="customisedParams"
    ></customSettingsModal>
  </div>
  <div v-else>
    <div class="text-center">
      <h4>2048 - The Remake</h4>
      <div class="mx-auto mt-md-1">
        <button type="button" class="btn gameButton" data-bs-toggle="modal" data-bs-target="#howToPlay">How to play?</button>
      </div>
    </div>

    <!-- Where the tiles will be at -->
    
    <div class="container mx-auto">
      <div class="row justify-content-center mt-md-4 mt-2">
        <div class="col-md-4 order-md-2">
          <!-- Tile Area -->
          <playingArea
            :tiles_table = "tiles_table"
          ></playingArea>
        </div>
        <div class="col-md-4 order-md-1">
          <div class="row">
            <div class="col-12 text-center mb-md-4 mb-2 mt-2">
              <!-- Scoring -->
              <span id="score"><b>SCORE:</b> {{ score }}</span>
            </div>
            <div class="col-12 ">
              <!-- Arrow press to shift tile -->
              <arrowButtons
                @arrow-press="shiftTiles"
                :is_game_over="gameOver"
                :win="didYouWin"
              ></arrowButtons>
            </div>
            <div class="col-12 my-1 text-center">
              <button type="button" class="btn gameButton" @click="refreshPage()">Change Settings</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-center">
          Game Mode: {{ didYouWin=="limitless" ? "Limitless" : "Reach Tile Number " + WIN_TILE_NO}}
        </div>
      </div>
      <div v-if="didYouWin !== 'limitless'" class="row mt-1">
        <div class="col text-center">
          Reach Tile Number:  {{ WIN_TILE_NO }}
        </div>
      </div>
      <div class="row mt-1">
        <div class="col text-center">
          Generating Tile Numbers:  {{ first_no }} and {{ second_no }}
        </div>
      </div>
    </div>

    <!-- Info Modal -->
    <playInfoModal
      :is_limitless = isGameModeLimitless
      :wintileno = WIN_TILE_NO
    ></playInfoModal>

  </div>
</template>

<style scoped>
  .gameButton {
    background-color: #53D8FB;
    font-weight: bold;
  }

  #score {
    font-size: large;
  }

  a:link, a:visited {
    color: #212529;
    text-decoration: none;
  }
</style>
