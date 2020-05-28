# vuepress-plugin-dice-roller

Plugin for [VuePress](https://vuepress.vuejs.org/) that allows rolling dice.

It is built upon this [RPG dice roller](https://github.com/GreenImp/rpg-dice-roller), and is used in its [documentation](https://greenimp.github.io/rpg-dice-roller).


## Install

Install the plugin:

```bash
npm install -D vuepress-plugin-dice-roller
# Or
yarn add -D vuepress-plugin-dice-roller
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
