<template>
  <div class="sixteen wide column">
    <div class="ui container" id="app">
      <div class="ui padded segment">
        <h4 class="ui header">Checkbox</h4>
        <vue-semantic-ui-checkbox label="Make my profile visible" name="simple"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Radio</h4>
        <vue-semantic-ui-checkbox class="radio" label="Radio Choice" name="radio"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Slider</h4>
        <vue-semantic-ui-checkbox class="slider" name="slider"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Toggle</h4>
        <vue-semantic-ui-checkbox class="toggle" name="toggle"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Read Only</h4>
        <vue-semantic-ui-checkbox class="read-only" label="Read Only" name="read_only"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Uncheckable</h4>
        <vue-semantic-ui-checkbox class="uncheckable" label="Uncheckable" name="uncheckable"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Checked</h4>
        <vue-semantic-ui-checkbox class="checked" name="checked"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Disabled</h4>
        <vue-semantic-ui-checkbox class="disabled" name="disabled"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Attach Events</h4>
        <vue-semantic-ui-checkbox :class="{'disabled': disableInput,'checked': checkInput}" name="attach-events"></vue-semantic-ui-checkbox>
        <div class="ui positive button" @click="checkInput=true">Check</div>
        <div class="ui negative button" @click="checkInput=false">Uncheck</div>
        <div class="ui button" @click="disableInput=true">Disable</div>
        <div class="ui basic button" @click="disableInput=false">Enable</div>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Fitted</h4>
        <div class="ui left floated compact segment">
          <vue-semantic-ui-checkbox class="fitted" name="fitted_simple"></vue-semantic-ui-checkbox>
        </div>
        <div class="ui left floated compact segment">
          <vue-semantic-ui-checkbox class="fitted slider" name="fitted_slider"></vue-semantic-ui-checkbox>
        </div>
        <div class="ui left floated compact segment">
          <vue-semantic-ui-checkbox class="fitted toggle" name="fitter_toggle"></vue-semantic-ui-checkbox>
        </div>
        <div class="ui clearing divider"></div>
      </div>


      <div class="ui padded segment">
        <h4 class="ui header">Events/Callbacks</h4>
        <vue-semantic-ui-checkbox
          name="events"
          @on-checked="onChecked"
          @on-unchecked="onUnchecked"
          @on-enable="onEnable"
          @on-disable="onDisable"
          @on-change="onChange"
        ></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Indeterminate</h4>
        <vue-semantic-ui-checkbox name="indeterminate" class="indeterminate"></vue-semantic-ui-checkbox>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Toggle</h4>
        <vue-semantic-ui-checkbox name="toggle" ref="toggleCheckbox"></vue-semantic-ui-checkbox>
        <div class="ui button" @click="$refs.toggleCheckbox.toggle()">Toggle</div>
      </div>

      <div class="ui padded segment">
        <h4 class="ui header">Group</h4>
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
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import VueSemanticUiCheckbox from '../components/VueSemanticUiCheckbox.vue';

import VueSemanticUiCheckboxGroup from '../components/VueSemanticUiCheckboxGroup.vue';

export default {

  data(){
    return {
      checkInput: false,
      disableInput: false,
    }
  },

  methods: {
    onChange(){},
    onEnable(){},
    onDisable(){},
    onChecked(){},
    onUnchecked(){},
    onDeterminate(){},
    onIndeterminate(){},
  },

  components: {
    VueSemanticUiCheckbox,
    VueSemanticUiCheckboxGroup,
  }
  
};
</script>