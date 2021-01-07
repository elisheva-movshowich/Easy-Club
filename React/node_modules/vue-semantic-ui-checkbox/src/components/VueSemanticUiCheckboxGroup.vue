<template>
  <div class="ui celled relaxed list">
    <div class="item">
      <slot name="parent"></slot>
      <slot name="children"></slot>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      childrens: []
    }
  },
  methods: {
    parentChanged(val){
      this.setChildrens(val);
    },
    setChildrens(val){
      if(val){
        this.childrens.forEach(row => {
          if(!row.$el.classList.value.includes('checked')){
            row.$el.classList.add('checked');
          }
        });
      }else{
        this.childrens.forEach(row => {
          if(row.$el.classList.value.includes('checked')){
            row.$el.classList.remove('checked');
          }
        });
      }
    }
  },
  mounted(){
    let parent,childrens = [];

    if(this.$children.length){
      parent = this.$children.find(row => row.$el.classList.value.includes('master'));
      this.childrens = this.$children.filter(row => row.$el.classList.value.includes('child'));
    }

    parent.$on('on-change', this.parentChanged);
  }
}
</script>