<template>
<div>
 <Test/>
 <Test2/>
 <Test3/>
</div>
</template>

<script>
import Test from './components/TestName'
import Test2 from './components/TestName2'
import Test3 from './components/TestName3'
export default{
  name:"App",
  components:{
    Test,Test2,Test3
  }
}
</script>

