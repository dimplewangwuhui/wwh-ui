<template>
  <section>
    <div style="margin-bottom: 20px">
      <wwh-button>按钮</wwh-button>
    </div>
    <div style="margin-bottom: 20px">
      <wwh-button>按钮</wwh-button>
      <wwh-button type="primary">primary按钮</wwh-button>
      <wwh-button type="success">success按钮</wwh-button>
      <wwh-button type="info">info按钮</wwh-button>
      <wwh-button type="warning">warning按钮</wwh-button>
      <wwh-button type="danger">danger按钮</wwh-button>
    </div>
    <div style="margin-bottom: 20px">
      <wwh-button plain>按钮</wwh-button>
      <wwh-button type="primary" plain>primary按钮</wwh-button>
      <wwh-button type="success" plain>success按钮</wwh-button>
      <wwh-button type="info" plain>info按钮</wwh-button>
      <wwh-button type="warning" plain>warning按钮</wwh-button>
      <wwh-button type="danger" plain>danger按钮</wwh-button>
    </div>
    <div style="margin-bottom: 20px">
      <wwh-button round>按钮</wwh-button>
      <wwh-button type="primary" round>primary按钮</wwh-button>
      <wwh-button type="success" round>success按钮</wwh-button>
      <wwh-button type="info" round>info按钮</wwh-button>
      <wwh-button type="warning" round>warning按钮</wwh-button>
      <wwh-button type="danger" round>danger按钮</wwh-button>
    </div>
    <div style="margin-bottom: 20px">
      <wwh-button circle icon="user"></wwh-button>
      <wwh-button type="primary" circle icon="icon7"></wwh-button>
      <wwh-button type="success" circle icon="iconfont20"></wwh-button>
      <wwh-button type="info" circle icon="iconfonticon-baobia"></wwh-button>
      <wwh-button type="warning" circle icon="iconfonticon-mim"></wwh-button>
      <wwh-button type="danger" circle icon="iconfonticon-shezhi"></wwh-button>
    </div>
    <div style="margin-bottom: 20px">
      <wwh-button @click="FnClickMe">点我</wwh-button>
    </div>
    <div style="margin-bottom: 20px">
      <wwh-button disabled>禁用</wwh-button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    FnClickMe () {
      alert('哈哈哈哈哈')
    }
  }
}
</script>
<style lang="scss">

</style>
