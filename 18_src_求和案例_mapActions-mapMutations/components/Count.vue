<template>
  <div>
      <h1>当前和为{{sum}}</h1>
      <h3>当前的和放大10倍{{bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
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
            //引入mapState生成计算属性(对象写法)
            // ...mapState({sum:'sum',school:'school',subject:'subject'})
            //引入mapState生成计算属性(数组写法)
            ...mapState(['sum','school','subject']),

            //引入mapGetter生成计算属性(对象写法)
            // ...mapGetters({bigSum:'bigSum'})
            //引入mapGetter生成计算属性(数组写法)
            ...mapGetters(['bigSum'])
        },
        methods: {
            // increment(){
            //     this.$store.commit('JIA',this.n)
            // },
            // decrement(){
            //      this.$store.commit('JIAN',this.n)
            // },
                   //靠mapMutations生成（对象写法）
            // ...mapMutations({increment:'JIA',decrement:'JIAN'}),
                   //靠mapMutations生成（数组写法）
            ...mapMutations(['JIA','JIAN']),
            // incrementOdd(){
            //     this.$store.dispatch('jiaOdd',this.n)
            // },
            // incrementWait(){
            //     this.$store.dispatch('jiaWait',this.n)
            // },
                //靠mapActions生成（对象写法）
            // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
                //靠mapActions生成（数组写法）
            ...mapActions(['jiaOdd','jiaWait'])
        },
    }
</script>

<style>
    button{
        margin-left: 10px;
    }
</style>