# AspireUI Icons 🖼

AspireUI Icons is the only set of Icons you will need in your project. It represents all Icons from [PRO FontAwesome](https://fontawesome.com/v6/icons) and custom-designed icons. We have `solid`, `regular`, and `brands` icons. This library is using `Typescript`, `Rollup` and `SVGR`

## 👷 Getting Started

```bash
yarn add @revfluence/aspireui-icons
```

_Please note: In order to install `@revfluence/aspireui-icons` use the same access token as you used for AspireX (requires the `read:packages` scope)_

```bash
npm config set @revfluence:registry https://npm.pkg.github.com/
npm config set //npm.pkg.github.com/:_authToken <YOUR_ACCESS_TOKEN>
```

## Usage

```js
import { Icon } from '@revfluence/aspireui-icons';

<Icon name="AcornRegular" />
<Icon name="AcornSolid" />
```

## Options

You can pass any `SVG prop` to the component

```js
<Icon width="40" title="Title" className="class" />
```

## 🌳 Add new Icons

Do you have new icon you want to add to the package?  
Add your SVG file in one of the `assets/*` folders and run `yarn build`. Script will create `svg` folder with all optimized SVG files and build React Components.

```js
yarn build // build project before you run storybook
yarn storybook /// to Run Storybook and test your icons
```

_Please note: You don't need to optimize SVG Icons, script does it for you_

**Steps to add new icons:**

1. Add new Icons to the `assets/*` folders
2. Run `yarn build`
3. Run `yarn storybook` to verify your icon

## ⚙️ How it Works

By running `yarn build` we execute scripts from the `scripts` folder which take all SVG files from `assets/*` folders, optimizes them, and creates React Components. All React components are generated into the `src` folder, which bundles into `lib` folder by `Rollup`

## 🐞 Known issues

1. All icons starting with Digit were removed from the package. If we plan to add them back, we need to replace starting digits with word to prevent wrong imports where no import is allowed if starting with digit.

2. You may be facing following error while building package

```
SvgoParserError: svg/solid/DsStoreSolid.svg:1:1: Non-whitespace before first tag.
```

To avoid this, manually remove all `.DS_Store` files from your folders by running

```
find . -name '.DS_Store' -type f -delete
```
