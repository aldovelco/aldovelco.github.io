<template>
  <form @submit.prevent>
    <div class="field">
      <label class="label">Title
        <span> *</span>
      </label>
      <p class="control">
        <input class="input" type="text" placeholder="Put your title here!" ref="titleInput" v-model="newPost.title" required>
      </p>
    </div>
  
    <div class="field">
      <label class="label">Subtitle</label>
      <p class="control">
        <input class="input" type="text" placeholder="(Optional)" v-model="newPost.subtitle">
      </p>
    </div>
  
    <div class="field">
      <label class="label">Body
        <span> *</span>
      </label>
      <p class="control">
        <textarea class="textarea" placeholder="Your content goes here" ref="bodyInput" v-model="newPost.body" required></textarea>
      </p>
    </div>
  
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary" @click="addPost" :disabled="submitDisabled">Submit</button>
      </p>
      <p class="control">
        <button class="button is-link" @click="clearInputs">Cancel</button>
      </p>
    </div>
  </form>
</template>

<script>
import { store } from '../app.js';

export default {
  props: {
    onSubmit: {
      type: Function,
      required: false
    }
  },

  data() {
    return {
      store: store,
      newPost: {
        title: '',
        subtitle: '',
        body: ''
      },
    }
  },

  computed: {
    submitDisabled() {
      return !(this.newPost.title && this.newPost.body);
    }
  },

  methods: {
    addPost() {
      this.store.posts.push({
        id: this.store.posts.length + 1,
        title: this.newPost.title,
        subtitle: this.newPost.subtitle,
        body: this.newPost.body
      });

      this.clearInputs();

      if (this.onSubmit) {
        this.onSubmit();
      }
    },

    clearInputs() {
      this.newPost.title = '';
      this.newPost.subtitle = '';
      this.newPost.body = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.label>span {
  color: red;
}
</style>