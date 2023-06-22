import { getDirname, path } from '@vuepress/utils';
import { Roll, Roller } from '@dice-roller/markdown-it-dice-roller';

const __dirname = getDirname(import.meta.url);

export const diceRollerPlugin = (options = {}) => ({
    name: '@dice-roller/vuepress-plugin-dice-roller',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    extendsMarkdown: (md) => {
        md.use(Roll, options.rollOptions || {});
        md.use(Roller, options.rollerOptions || {});
    },
});
