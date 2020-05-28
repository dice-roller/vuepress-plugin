const markdownItContainer = require('markdown-it-container');
const path = require('path');

function render(tokens, idx) {
  console.log(tokens);

  return `<DiceRoller notation="6d10"/>`
}

module.exports = (options = {}) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  extendMarkdown: (md) => {
    md.use(markdownItContainer, 'roll', { render });
  },
});
