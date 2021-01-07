
# vue-semantic-ui-checkbox
Semantic UI Checkbox built using Vue js. This plugin uses semantic ui css and won't require any jQuery. This plugin contains only semantic ui checkbox. For other components search for vue-semantic-ui-{component-name}

# How to use it

## Installation

### NPM
Ubuntu / Mac
```bash
$ npm install vue-semantic-ui-checkbox
```
Windows
```cmd
c:\path\to\project\folder> npm install vue-semantic-ui-checkbox
```

### CommonJS
```js
var VueSemanticUiCheckbox = require('vue-semantic-ui-checkbox').VueSemanticUiCheckbox;

new Vue({
  components: {
    'vue-semantic-ui-checkbox': VueSemanticUiCheckbox
  }
})
```

### ES6
```js
import { VueSemanticUiCheckbox } from 'vue-semantic-ui-checkbox'

new Vue({
  components: {
    'vue-semantic-ui-checkbox': VueSemanticUiCheckbox
  }
})
```

#Simple Checkbox
import { VueSemanticUiCheckbox } from 'vue-semantic-ui-checkbox'
```html

<vue-semantic-ui-checkbox 
  label="Make my profile visible" 
  name="simple"
></vue-semantic-ui-checkbox>
```

#Checkbox Group
import { VueSemanticUiCheckbox } from 'vue-semantic-ui-checkbox'
```html
<vue-semantic-ui-checkbox-group>
  <vue-semantic-ui-checkbox 
    slot="parent" 
    name="fruits" 
    class="master" 
    label="Fruits"
  ></vue-semantic-ui-checkbox>
  <div class="list" slot="children">
    <div class="item">
      <vue-semantic-ui-checkbox 
        name="apple" 
        class="child" 
        label="Apple"
      ></vue-semantic-ui-checkbox>
    </div>
  </div>
</vue-semantic-ui-checkbox-group>
```

### Browser globals
The `dist` folder contains `vue-semantic-ui-checkbox.min.js`

```html
<body>
  <div id="app">
    <vue-semantic-ui-checkbox></vue-semantic-ui-checkbox>
  </div>
  <script src="path/to/vue.js"></script>
  <script type="text/javascript" src="path/to/vue-semantic-ui-checkbox.js"></script>
  <script type="text/javascript">
    Vue.use(VueSemanticUiCheckbox);
  </script>
</body>
```

## Local setup

```
npm install
npm run dev
```

Change the class to change the behaviour of the checkbox
Add class " checked " the result will be a checked checkbox 

 Checked
```html
<vue-semantic-ui-checkbox 
  label="Make my profile visible" 
  name="simple"
  :class="{'checked': ifConditionIsTrue}"
></vue-semantic-ui-checkbox>
```

 Toggle
```html
<vue-semantic-ui-checkbox 
  label="Make my profile visible" 
  name="simple"
  :class="{'toggle': true}"
></vue-semantic-ui-checkbox>
```

 Toggle and Checked
```html
<vue-semantic-ui-checkbox 
  label="Make my profile visible" 
  name="simple"
  :class="{'toggle': true, 'checked': ifConditionIsTrue}"
></vue-semantic-ui-checkbox>
```
 Slider
```html
<vue-semantic-ui-checkbox 
  label="Make my profile visible" 
  name="simple"
  :class="{'slider': true}"
></vue-semantic-ui-checkbox>
```

 Slider and Checked
```html
<vue-semantic-ui-checkbox 
  label="Make my profile visible" 
  name="simple"
  :class="{'slider': true, 'checked': ifConditionIsTrue}"
></vue-semantic-ui-checkbox>
```

## TODO
-[] Indeterminate state in group checkbox
-[] Uncheck parent checkbox when all child checkboxes are unchecked in group checkbox

## Examples
https://github.com/jaskaran-kalra/vue-semantic-ui-checkbox/blob/master/src/views/Checkbox.vue


## License

vue-semantic-ui-checkbox is licensed under [The MIT License](LICENSE).

