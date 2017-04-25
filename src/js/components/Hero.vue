<template>
  <section class="hero is-primary is-small is-bold">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <a href="#/" id="logo" class="nav-item is-active">aldovelco</a>
            </a>
          </div>
          <span class="nav-toggle" :class="menuClass" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu" :class="menuClass">
            <router-link to="/" tag="li" class="nav-item" exact><a>Home</a></router-link>
            <router-link to="/about" tag="li" class="nav-item"><a>About</a></router-link>

            <x-level :mobile="true">
              <span class="nav-item level-item">
                <a href="https://www.linkedin.com/in/aldovelco/" class="is-primary">
                  <x-fa name="linkedin"></x-fa>
                </a>
              </span>
  
              <span class="nav-item level-item">
                <a href="https://github.com/aldovelco" class="is-primary">
                  <x-fa name="github"></x-fa>
                </a>
              </span>
  
              <span class="nav-item level-item">
                <a href="https://twitter.com/aldovelco" class="is-primary">
                  <x-fa name="twitter"></x-fa>
                </a>
              </span>
            </x-level>
  
          </div>
        </div>
      </header>
    </div>
  
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <slot name="body"></slot>
      </div>
    </div>
  
    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-centered">
        <div class="container">
          <ul>
            <router-link to="/" tag="li" exact><a>Home</a></router-link>
            <router-link to="/about" tag="li"><a>About</a></router-link>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import FontAwesomeIcon from './FontAwesomeIcon.vue';
import Level from './Level.vue';


export default {
  data() {
    return {
      isMenuActive: false,
    }
  },

  computed: {
    menuClass() {
      return { 'is-active': this.isMenuActive };
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuActive ? this.isMenuActive = false : this.isMenuActive = true;
    }
  },

  components: {
    'x-fa': FontAwesomeIcon,
    'x-level': Level,
  }
}
</script>

<style lang="scss" scoped>
</style>