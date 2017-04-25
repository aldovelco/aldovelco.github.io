<template>
  <div class="level" :class="{ 'is-mobile': mobile }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mobile: { type: Boolean }
  }
}
</script>

<style lang="scss" scoped>
</style>