<p align="center">
    <img src="https://greenimp.github.io/rpg-dice-roller/hero.svg" alt="RPG Dice Roller" style="max-width: 100%;" width="180"/>
</p>

# RPG Dice Roller Vuepress Plugin

Plugin for [VuePress](https://vuepress.vuejs.org/) that allows rolling dice.

It is built upon this [RPG dice roller](https://github.com/GreenImp/rpg-dice-roller), and is used in the [documentation](https://greenimp.github.io/rpg-dice-roller).


## Install

Install the plugin:

```bash
npm install -D @dice-roller/vuepress-plugin
# Or
yarn add -D @dice-roller/vuepress-plugin
```

Then add the plugin to your Vuepress config file:

```javascript
module.exports = {
  ...
  plugins: [
    ...
    'dice-roller',
  ],
};
```


## Usage

You can add a dice roller anywhere by using the following markdown syntax, where `{notation}` is the optional notation to pre-fill the input with:

```
::: roll {notation} :::
```

For example:

```
::: roll 4d6 ::
```

```
::: roll (2*6)d10 / (4 - d20) :::
```
