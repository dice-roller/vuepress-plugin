const markdownItContainer = require('markdown-it-container');
const path = require('path');

function render(tokens, idx) {
  const { nesting, info } = tokens[idx];

  if (nesting === 1) {
    // opening tag
    const [, notation] = info.trim().match(/roll\s+(.*?(?=\s*:::))/);

    return `<DiceRoller notation="${notation}"/>`;
  }

  // closing tag
  return '';
}

module.exports = (options = {}) => ({
  name: 'vuepress-plugin-dice-roller',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  extendMarkdown: (md) => {
    md.use(markdownItContainer, 'roll', { render });
  },
});
