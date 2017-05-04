<template>
  <div class="card">
    <div class="card-image">
      <slot name="image"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>