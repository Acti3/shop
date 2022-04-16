<template>
    <div>
        <h1>人员列表</h1>
        <h3>count组件求和为：{{sum}}</h3>
        <input type="text" placeholder="情输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'PersonName',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('JIA_PER',personObj)
            this.name=''
        }
    }
}
</script>

<style>

</style>