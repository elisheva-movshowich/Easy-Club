<style scoped>
.ui.checkbox label{
  cursor: pointer;
}
</style>

<template>
  <div class="ui checkbox">
    <input :id="id" :disabled="disabled" @change="change($event.target.checked)" :checked="checked" :type="type" :name="name">
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: ['label','name'],
  data () {
    return {
      id: null,
      disabled: false,
      checked: false,
      type: 'checkbox',
      disableCheck: false,
      disableUncheck: false,
      indeterminate: false
    }
  },
  watch: {
    checked(val){
      if(val){
        if(this.disableCheck){
          this.checked = false;
        }else{
          this.$emit('on-checked');
        }
      }else{
        if(this.disableUncheck){
          this.checked = true;
        }else{
          this.$emit('on-unchecked');
        }
      }
    },
    disabled(val){
      if(val){
        this.$emit('on-disabled');
      }else{
        this.$emit('on-enable');
      }
    },
    indeterminate(val){
      if(val){
        this.$emit('on-indeterminate');
        this.$el.childNodes.forEach(row=>row.nodeName=='INPUT'?row.indeterminate=true:null);
      }else{
        this.$emit('on-determinate');
        this.$el.childNodes.forEach(row=>row.nodeName=='INPUT'?row.indeterminate=false:null);
      }
    }
  }, 
  methods: {
    change(value){
      this.checked = value;
      this.$emit('on-change', value);
      this.indeterminate=false;
      if(this.$el.className.includes('indeterminate')){
        this.$el.classList.remove('indeterminate');
      }
    },
    toggle(){
      this.checked=!this.checked;
    },
    setClassAttributes(){
      let className = this.$el.className;

      this.id = this._uid;

      //disabled checkbox
      if(className.includes('disabled')){
        this.disabled = true;
      }else if(this.disabled){
        this.disabled = false;
      }

      //read only checkbox
      if(className.includes('read-only')){
        this.disableCheck = true;
      }else if(this.disableCheck){
        this.disableCheck = false;
      }

      //read only checkbox
      if(className.includes('uncheckable')){
        this.disableUncheck = true;
      }else if(this.disableUncheck){
        this.disableUncheck = false;
      }

      //checked checkbox
      if(className.includes('checked')){
        (!this.disabled) ? this.checked=true : null;
      }else if(this.checked){
        this.checked = false;
      }

      //radio checkbox
      if(className.includes('radio')){
        this.type = 'radio';
      }else if(this.type=='radio'){
        this.type = 'checkbox';
      }

      if(className.includes('indeterminate')){
        this.indeterminate = true;
      }else if(this.indeterminate==true){
        this.indeterminate = false;
      }
    }
  },  
  mounted () {
    this.setClassAttributes();

    new MutationObserver(ms => ms.forEach(m => m.attributeName==="class"&&this.setClassAttributes())).observe(this.$el, {attributes: true});
  }
}
</script>