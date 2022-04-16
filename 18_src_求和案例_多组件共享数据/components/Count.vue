<template>
  <div>
      <h1>当前和为{{sum}}</h1>
      <h3>当前的和放大10倍{{bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
      <h3>person组件中的总人数{{personList.length}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="JIA(n)">+</button>
      <button @click="JIAN(n)">-</button>
      <button @click="jiaOdd(n)">当前求和为奇数再加</button>
      <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
        name:'CountName',
        data() {
            return {
                n:1,
            }
        },
           
        computed:{
            ...mapState(['sum','school','subject','personList']),
            ...mapGetters(['bigSum'])
        },
        methods: {
            ...mapMutations(['JIA','JIAN']),
            ...mapActions(['jiaOdd','jiaWait'])
        },
    }
</script>

<style>
    button{
        margin-left: 10px;
    }
</style>