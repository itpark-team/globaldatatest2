<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "ComponentTwo",
  data() {
    return {
      message: "111"
    }
  },
  mounted() {
    this.eventBus.on('test', (args) => {
      this.message = args;
    })
  },
}
</script>

<style scoped>

</style>