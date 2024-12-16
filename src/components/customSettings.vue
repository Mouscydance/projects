<script setup>
    // Defining emits for component
    const emit = defineEmits(["set-up-settings"]);

    var row = "";
    var col = "";

    function setUpSettings() {
        // Handle the setting up
        emit('set-up-settings', row, col);
    }
</script>

<template>
    <div class="container">
        <div class="row my-2">
            <div class="col-md-6 col-12 my-1">
                <div class="d-flex">
                    ROWS:&ensp;&ensp;
                    <select class="form-select" v-model="row">
                        <option value="4" selected>4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 col-12 my-1">
                <div class="d-flex">
                    COLUMNS:&ensp;&ensp;
                    <select class="form-select" v-model="col">
                        <option value="4" selected>4</option>
                        <option value="5">5</option>
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