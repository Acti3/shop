<template>
   <div>
    <gridview :cols="3"
               :lineSpace="15"
               :v-margin="20"
               v-if="subcategories">
      <div class="item"
           v-for="(item, index) in subcategories"
           :key="index">
        <a :href="item.link">
          <img  class="item-img"
                :src="item.image" alt=""
                @load="imageLoad">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </gridview>
  </div>
</template>

<script>
import gridview from '@/components/common/gridview/GridView'
export default {
    name:'CategoryContent',
    components:{
        gridview
    },
    props:{
        subcategories:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
        imageLoad(){
            this.$bus.$emit('itemImageLoad')
        },
    },
}
</script>

<style>
    .item{
        text-align: center;
        color: white;
    }
</style>