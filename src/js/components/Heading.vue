<template>
  <div class="heading">
    <h1 class="title">{{this.title}}</h1>
    <h2 class="subtitle" v-if="this.subtitle">{{this.subtitle}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true },
    subtitle: null
  }
}
</script>

<style lang="scss" scoped>
</style>