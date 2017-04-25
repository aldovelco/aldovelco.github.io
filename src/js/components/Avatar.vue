<template>
  <img :src="src" alt="Avatar" class="image is-128x128" :class="{'img-circle': circle}">
</template>

<script>
export default {
  props: {
    src: { required: true },
    circle: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
.img-circle {
  border-radius: 50%;
}
</style>