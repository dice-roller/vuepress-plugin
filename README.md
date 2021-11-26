<p align="center">
    <img src="http://greenimp.github.io/rpg-dice-roller/dice-roller-logo.png" alt="RPG Dice Roller" style="max-width: 100%;" width="200"/>
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
  plugins: [
    '@dice-roller/vuepress-plugin-dice-roller',
  ],
};
```


## Usage

You can add a die roller anywhere by using the following markdown syntax:

```
::: roll :::
```

You can even specify the default notation with:

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
