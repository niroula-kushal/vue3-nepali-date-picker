# Vue3 Nepali Date Picker

Vue 3 Nepali Date Picker is a lightweight wrapper around [Nepali Date Picker](https://github.com/sajanm/nepali-date-picker.git) by [@Sajanm](https://github.com/sajanm). It provides an elegant UI for the end users to input nepali date.

## Preview
> Without year/month select

![image](https://user-images.githubusercontent.com/28915667/184473176-eada754e-1fb5-4247-8425-3a861a3576f4.png)

> With Year/Month Select

![image](https://user-images.githubusercontent.com/28915667/184473214-9868ee4c-0068-4364-a756-5e427981929f.png)

> Disabled dates

![image](https://user-images.githubusercontent.com/28915667/184473243-fc6968d1-a834-4ceb-9d2b-327322f7136f.png)

> Code Sandbox: https://codesandbox.io/s/vue-nepali-date-picker-playground-br3cuu

## Dependencies

- [Vue](https://vuejs.org) : This library is directly depended on Vue3

## Installation

```bash
npm i vue-nepali-date-picker

OR

yarn add vue-nepali-date-picker
```

## Basic Usage
1. Inject the styles, preferabbly in App.vue

```js
import 'vue-nepali-date-picker/dist/style.css';
```
2. Import component and use it in your app
```js

import VNepaliDatePicker from 'vue-nepali-date-picker';
...
<VNepaliDatePicker v-model="date" 
          :allow-clear="allowClear" 
          :allowed-past-days="allowedPastDays" 
          :allowed-future-days="allowedFutureDays" 
          :input-classes="inputClasses"
          :nepali-date-format="inputDateFormat"
          :year-select="yearSelect"
          :month-select="monthSelect"
          :year-count="yearCount"
          :max="max" 
          :min="min"
          :language="language"
        >
          <template #clear-btn="{onClear}">
            <span class="clear-btn" @click.prevent="onClear">
                ❌
            </span>
          </template>
        </VNepaliDatePicker>
```

## View Props usage documentation at [Docs](https://vue-nepali-date-picker.netlify.app/)

------------------------------------------------------------------------------------------------------


## Handling of [Nepali Date Picker - https://github.com/sajanm/nepali-date-picker.git](https://github.com/sajanm/nepali-date-picker.git)

There were some issues with using the package as is. The package does not provide source code and just provides a minified version of js and css. We needed to make some changes to the files there as the current files were not compatible with our usage.

So the minified version of the source code were unminified and then placed in this repository with minor adjustments. This is purely to make sure this library works and there is no ill intent here.

Huge props to the library for making this possible.


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
