<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="card-title"></slot>
        </p>
        <button class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="card-footer">
          <a class="button is-success">Submit</a>
          <a class="button" @click="close">Cancel</a>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        this.close();
      }
    });
  },

  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>