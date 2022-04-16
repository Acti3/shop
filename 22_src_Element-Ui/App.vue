<template>
    <div>
      <button >按钮</button>
      <input type="text" name="" id="">
      <aN-a-row>
          <aN-a-button>默认按钮</aN-a-button>
          <aN-a-button type="primary">主要按钮</aN-a-button>
          <aN-a-button type="success">成功按钮</aN-a-button>
          <aN-a-button type="info">信息按钮</aN-a-button>
          <aN-a-button type="warning">警告按钮</aN-a-button>
          <aN-a-button type="danger">危险按钮</aN-a-button>
       </aN-a-row>
       <aN-a-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </aN-a-switch>
    </div>
</template>

<script>
export default {
  name:'AppName',
  data(){
    return{
      value:true
    }
  }
}
</script>-a