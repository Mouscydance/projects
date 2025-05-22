export function randomSpawn(ROW, COL, tiles_table, first="2", second="4") {
    // This finds all the spaces with emptyness
    var empty_list = [];
    for (let x = 0; x < ROW; x++) {
      for (let y = 0; y < COL; y++) {
        if (tiles_table[x][y] == "") {
          empty_list.push([x,y]);
        }
      }
    }

    if (empty_list.length == 0) {
      return;
    }

    // This picks a random one in empty_list
    var index_random = Math.floor(Math.random() * empty_list.length);

    // This will decide if is '2' or '4'
    var number_random = Math.random();

    if (number_random < 0.9) {
      tiles_table[empty_list[index_random][0]][empty_list[index_random][1]] = first;
    }
    else {
      tiles_table[empty_list[index_random][0]][empty_list[index_random][1]] = second;
    }

    return;
  }

export function mergeTiles(score, shouldSpawn, tile_list) {
    // Merge the tiles and return the list
    var result = [];
    var left = 0;

    while (left < tile_list.length) {
      if (tile_list[left] === "") {
        left ++;
      }
      else if (tile_list[left] === tile_list[left+1]) {
        score.value += parseInt(tile_list[left]) + parseInt(tile_list[left+1]);
        result.push(String(Number(tile_list[left]) + Number(tile_list[left+1])));
        left += 2;
        shouldSpawn = true;
      }
      else {
        result.push(tile_list[left])
        left ++;
      }
    }

    while (result.length < tile_list.length) {
        result.push("");
    }

    return result;
  }

export function checkList(original, edited) {
    // Returns true if is same, else is false
    if (original.length !== edited.length) {
      return false;
    }
    for (let i = 0; i < original.length; i++) {
      if (original[i] !== edited[i]) {
        return false;
      }
    }
    return true;
  }

export function have2048(ROW, COL, tiles_table, winning_no) {
  //Checks if reached winning_no
  for (let x = 0; x < ROW; x++) {
    for (let y = 0; y < COL; y++) {
      if (tiles_table[x][y] == winning_no) {
        return true;
      }
    }
  }
  
  return false;
}

export function isTableFull(ROW, COL, tiles_table) {
  // Checks if table is filled with tiles
  for (let x = 0; x < ROW; x++) {
    for (let y = 0; y < COL; y++) {
      if (tiles_table[x][y] == "") {
        return false;
      }
    }
  }
  
  if(canMerge(ROW, COL, tiles_table)) {
    return false;
  }
  else {
    return true;
  };
}

function canMerge(ROW, COL, tiles_table) {
  // Checks if there are two tiles next to each other
  for (let x = 0; x < ROW; x++) {
    for (let y = 0; y < COL - 1; y++) {
      if (tiles_table[x][y] === tiles_table[x][y+1]) {
        return true;
      }
    }
  }
  for (let y = 0; y < COL; y++) {
    for (let x = 0; x < ROW - 1; x++) {
      if (tiles_table[x][y] === tiles_table[x+1][y]) {
        return true;
      }
    }
  }

  return false
}

export function createTable(ROW, COL) {
  let temp = [];

  for (let i = 0; i < ROW; i++) {
    let col_temp = [];
    for (let j = 0; j < COL; j++) {
      col_temp.push("");
    }
    temp.push(col_temp);
  }

  return temp;
}

export function refreshPage() {
  // Refresh page
  window.location.reload();
}