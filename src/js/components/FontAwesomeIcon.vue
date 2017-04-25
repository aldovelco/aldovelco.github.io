<template>
  <span class="icon"><i class="fa" :class="icon"></i></span>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true }
  },

  computed: {
    icon() {
      return (this.name.startsWith('fa-')) ? this.name : `fa-${this.name}`;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>