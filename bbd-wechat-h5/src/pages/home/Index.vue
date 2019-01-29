<template>
  <div>
    <a href="/api/buy/car-list">调用后台接口</a>
    <a href="/api/wechat/auth?callBackUrl=/">微信授权</a>
    <router-link to="https://www.baidu.com/">百度一下</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    this.getUrlParam()
  },
  methods: {
    loadParam: function () {
      let code = this.$route.query.code
      alert(code)
      console.log(this.$route)
    },
    getUrlParam: function () {
      let channel = this.$utils.getUrlKey('code')
      alert(channel)
    }
  }
}
</script>

<style>
</style>
