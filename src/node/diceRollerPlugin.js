import { getDirname, path } from '@vuepress/utils';
import markdownItContainer from 'markdown-it-container';

const __dirname = getDirname(import.meta.url);

const render = (tokens, idx) => {
    const { nesting, info } = tokens[idx];

    if (nesting === 1) {
        // opening tag
        const [, notation] = info.trim().match(/roll\s+(.*?(?=\s*:::))/);

        return `<DiceRoller notation="${notation}"/>`;
    }

    // closing tag
    return '';
};

export const diceRollerPlugin = () => ({
    name: '@dice-roller/vuepress-plugin-dice-roller',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    extendsMarkdown: (md) => {
        md.use(markdownItContainer, 'roll', { render });
    },
});
