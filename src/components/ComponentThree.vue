<template>
  <div>three</div>
  <div>{{ innerGlobalData.a }}</div>
  <div>{{ globalData.a }}</div>
  <button @click="clickme">Press me</button>
  <button @click="checkSummator">checkSummator</button>
</template>

<script>

export default {
  name: "ComponentThree",
  inject: ["globalData"],
  data() {
    return {
      innerGlobalData: this.globalData
    }
  },
  methods: {
    clickme() {
      this.innerGlobalData.a = "bbbb";
    },
    checkSummator() {
      alert(this.innerGlobalData.summator(3, 5));
    }
  }

}
</script>

<style scoped>

</style>