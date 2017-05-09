<template>
  <div class="content">
    <h1 class="title">Blog
      <span class="tag is-light">{{ posts.length }}</span>
    </h1>
  
    <button class="button" @click="isActiveModal = true">Modal</button>
    <x-modal v-if="isActiveModal" @close="isActiveModal = false">
      <x-new-post :on-submit="onSubmit"></x-new-post>
    </x-modal>

    <x-card v-for="post in latestPosts" :key="post.id" class="post">
      <h2 class="title is-4">{{ post.title }}</h2>
      <h3 class="subtitle is-6">{{ post.subtitle }}</h3>
      <p class="body">{{ post.body }}</p>
    </x-card>
  </div>
</template>

<script>
import { store, bus } from '../app.js';

import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';
import NewPost from '../components/NewPost.vue';

export default {
  components: {
    'x-card': Card,
    'x-modal': Modal,
    'x-new-post': NewPost
  },

  data() {
    return {
      store: store,
      posts: store.posts,
      isActiveModal: false
    }
  },

  computed: {
    latestPosts() {
      return this.posts.sort((a, b) => a.id < b.id);
    }
  },

  methods: {
    onSubmit() {
      bus.$emit('notify', {
        type: 'info',
        message: 'A new post has been added!',
      });
      this.isActiveModal = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 2em;

  .body {
    white-space: pre-wrap;
  }
}
</style>