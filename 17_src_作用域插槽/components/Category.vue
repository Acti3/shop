<template>
  <div class="category">
      <h2>{{tittle}}分类</h2>
      <slot :movies="films"></slot>
  </div>
</template>

<script>
    export default {
        name:'CategoryName',
        props:['tittle'],
        data() {
            return {
                films:['《教父》','《你好》','《山沟沟》']
            }
        },
    }
</script>

<style>
    .category{
        background-color: rgb(109, 109, 151);
        width: 200px;
        height: 300px;
    }
    h2{
        text-align: center;
        background-color: orange;
    }
</style>