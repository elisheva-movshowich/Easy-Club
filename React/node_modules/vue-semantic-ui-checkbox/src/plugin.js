import VueSemanticUiCheckbox from './components/VueSemanticUiCheckbox.vue';
import VueSemanticUiCheckboxGroup from './components/VueSemanticUiCheckboxGroup.vue';


module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-semantic-ui-checkbox', VueSemanticUiCheckbox);
    Vue.component('vue-semantic-ui-checkbox-group', VueSemanticUiCheckboxGroup);
  }
};