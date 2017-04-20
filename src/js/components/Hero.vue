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
                  <span class="nav-toggle" :class="{'is-active': isMenuActive}" @click="toggleMenu()">
                  <span></span>
                  <span></span>
                  <span></span>
                  </span>
                  <div class="nav-right nav-menu" :class="{'is-active': isMenuActive}">
                      <router-link to="/" class="nav-item" exact>Home</router-link>
                      <router-link to="/about" class="nav-item">About</router-link>
                      <router-link to="/contact" class="nav-item">Contact</router-link>

                      <span class="nav-item">
                      <a href="https://github.com/aldovelco" class="is-primary">
                          <span class="icon"><i class="fa fa-github"></i></span>
                      </a>
                      </span>

                      <span class="nav-item">
                      <a href="https://twitter.com/aldovelco" class="is-primary">
                          <span class="icon"><i class="fa fa-twitter"></i></span>
                      </a>
                      </span>

                      <span class="nav-item">
                      <a href="https://www.linkedin.com/in/aldovelco/" class="is-primary">
                          <span class="icon"><i class="fa fa-linkedin"></i></span>
                      </a>
                      </span>
                  </div>
              </div>
          </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">
                  Aldo Velasco
              </h1>
              <h2 class="subtitle">
                  Software Engineer
              </h2>

              <div class="">
                  <span class="">
                      <a href="https://github.com/aldovelco" class="is-primary">
                          <span class="icon"><i class="fa fa-github"></i></span>
                  </a>
                  </span>

                  <span class="">
                      <a href="https://twitter.com/aldovelco" class="is-primary">
                          <span class="icon"><i class="fa fa-twitter"></i></span>
                  </a>
                  </span>

                  <span class="">
                      <a href="https://www.linkedin.com/in/aldovelco/" class="is-primary">
                          <span class="icon"><i class="fa fa-linkedin"></i></span>
                  </a>
                  </span>
              </div>
          </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
          <nav class="tabs is-boxed is-centered">
              <div class="container">
                  <ul>
                      <router-link to="/" tag="li" exact><a>Home</a></router-link>
                      <router-link to="/about" tag="li"><a>About</a></router-link>
                      <router-link to="/contact" tag="li"><a>Contact</a></router-link>
                  </ul>
              </div>
          </nav>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuActive ? this.isMenuActive = false : this.isMenuActive = true;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>