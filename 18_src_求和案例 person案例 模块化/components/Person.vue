<template>
    <div>
        <h1>人员列表</h1>
        <h3>count组件求和为：{{sum}}</h3>
        <h3>列表中第一个的名字：{{firstName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addPer">添加一个姓王的人</button>
        <button @click="addSer">添加一个随机</button>
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
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstName(){
            return this.$store.state['personAbout/FirstName']
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/JIA_PER',personObj)
            this.name=''
        },
        addPer(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name=''
        },
        addSer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>

<style>

</style>