<script setup>
    // Defining emits for component
    const emit = defineEmits(["set-up-settings"]);

    var row = "4";
    var col = "4";
    var highest_tile = "limitless";
    var first = "2";
    var second = "4";

    // All possible tile numbers
    var goalTiles = ["limitless","256", "1024", "2048", "4096"];
    var generationTiles = ["2", "4", "8", "16"];

    function setUpSettings() {
        // Handle the setting up
        emit('set-up-settings', row, col, highest_tile, [first, second]);
    }
</script>

<template>
    <div class="container">
        <div class="row my-2">
            <div class="col-md-6 col-12 my-1">
                <!-- Set rows -->
                <div class="d-flex">
                    ROWS:&ensp;&ensp;
                    <select class="form-select" v-model="row">
                        <option value="4" selected>4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 col-12 my-1">
                <!-- Set columns -->
                <div class="d-flex">
                    COLUMNS:&ensp;&ensp;
                    <select class="form-select" v-model="col">
                        <option value="4" selected>4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col my-1">
                <!-- Set highest time -->
                <div class="d-flex">
                    HIGHEST&nbsp;TILE&nbsp;NUMBER:&ensp;&ensp;
                    <select class="form-select" v-model="highest_tile">
                        <option v-for="tile of goalTiles" :value="tile" selected>{{tile}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-md-6 col-12 my-1">
                <!-- Set tile no 1 generation -->
                <div class="d-flex">
                    Tile #1 for generation:&ensp;&ensp;
                    <select class="form-select" v-model="first">
                        <option v-for="tile of generationTiles" :value="tile" selected>{{tile}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 col-12 my-1">
                <!-- Set columns -->
                <div class="d-flex">
                    Tile #2 for generation:&ensp;&ensp;
                    <select class="form-select" v-model="second">
                        <option v-for="tile of generationTiles" :value="tile" selected>{{tile}}</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- Button to handle settings set-->
        <div class="row">
            <div class="col-12 mt-3 text-center">
                <button type="button" class="btn gameButton" @click="setUpSettings()">Begin!</button>
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