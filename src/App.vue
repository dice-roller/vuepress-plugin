<script setup>
import DiceRoller from './client/components/DiceRoller.js';
import {ref, watch} from 'vue';

const root = document.documentElement
const darkThemeHex = '#22272e'
const lightThemeHex = '#ffffff'
const isDarkTheme = ref(true);

watch(
    isDarkTheme,
    (oldValue, newValue) => {
      const newColor = newValue ? lightThemeHex : darkThemeHex;
      root.style.setProperty('--bg-color', newColor);

      document.documentElement.classList.toggle('dark', !newValue);
    },
    { immediate: true },
);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}
</script>

<template>
  <div class="main" :class="{dark: isDarkTheme}">
    <div class="container">
      <DiceRoller />

      <button class="theme-button" @click="toggleTheme">
        {{ isDarkTheme ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
}

.theme-button {
  padding: 0.5rem 1rem;
  color: var(--dice-roller-text-color);
  background-color: var(--dice-roller-bg);
  border: 1px solid var(--dice-roller-color);
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
