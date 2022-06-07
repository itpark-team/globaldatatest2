<template>
  <div>
    <button v-on:click="emitEvent" >Emit Event</button>
  </div>
</template>

<script>
export default {
  name: "ComponentOne",
  methods: {
    emitEvent() {
      this.eventBus.emit('test', 'Welcome to MNP!')
    },
  },
}
</script>

<style scoped>

</style>