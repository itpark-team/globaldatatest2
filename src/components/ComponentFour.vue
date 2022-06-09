<template>
  <div>four</div>
  <div>{{ innerGlobalData.a }}</div>
</template>

<script>
export default {
  name: "ComponentFour",
  inject: ["globalData"],
  data() {
    return {
      innerGlobalData: this.globalData
    }
  }
}
</script>

<style scoped>

</style>