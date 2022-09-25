import { defineClientConfig } from '@vuepress/client';
import { DiceRoller } from './components/DiceRoller.js';

export default defineClientConfig({
  enhance({ app }) {
    app.component('DiceRoller', DiceRoller);
  },
})
