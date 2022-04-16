export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value=binding.value
            },
            //指令所在元素插入页面时
            inserted(element){
                element.focus()
            },
            //指令所在得模板被重新解析时
            update(element,binding){
                element.value=binding.value     
            }
        })
        
    }
}