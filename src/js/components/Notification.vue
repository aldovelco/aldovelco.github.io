<template>
  <div class="notification" :class="isType">
    <button class="delete" v-if="dismissable" @click="dismiss"></button>
    <p class="has-text-centered">
      <slot></slot>
    </p>
  </div>
</template>

<script>
// import { bus } from '../app.js';

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    dismissable: {
      type: Boolean,
      default: false
    },
  },

  methods: {
    dismiss() {
      this.$emit('dismiss');
    }
  },

  computed: {
    isType() {
      return `is-${this.type}`;
    },
  }
}
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-out .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>