<template >
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">把学校名给app</button>
    </div>  
</template>

<style>
.school{
    background-color: red;
}
</style>

<script>
    export default {
        data(){
                return {
                    name:'首义',
                    address:'武汉'
                    }
            },
            props:['getSchoolName'],
            methods: {
                sendSchoolName(){
                    this.getSchoolName(this.name)
                }
            },
    }
</script>