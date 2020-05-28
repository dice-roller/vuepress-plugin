<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DiceRoller notation="d20" v-on:roll="rolling"/>
  </div>
</template>

<script>
import DiceRoller from 'vue-rpg-dice-roller/dist/vue-rpg-dice-roller.common';

export default {
  name: 'App',
  components: {
    DiceRoller,
  },
  methods: {
    rolling($event) {
      console.log($event);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
