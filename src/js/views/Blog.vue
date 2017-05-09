<template>
  <div class="content">
    <div class="columns">
      <div class="column is-11">
        <h1 class="title">Blog
          <span class="tag is-light">{{ posts.length }}</span>
        </h1>
      </div>
      <div class="column is-1">
        <span class="icon is-large addPost" v-if="store.user">
          <i class="fa fa-plus-circle" @click="showNewPost" title="Add a new post"></i>
        </span>
      </div>
    </div>
  
    <x-modal v-if="isActiveModal" @close="isActiveModal = false">
      <x-new-post :on-submit="onSubmit"></x-new-post>
    </x-modal>
  
    <x-card v-for="post in latestPosts" :key="post.id" class="post" :class="{'see-more': post.seeMore}">
      <h2 class="title is-4">{{ post.title }}</h2>
      <h3 class="subtitle is-6">{{ post.subtitle }}</h3>
      <p class="body">{{ post.body }}</p>
  
      <p class="has-text-centered">
        <button class="button btn-see-more" v-show="!post.seeMore" :class="seeMoreBtn" @click="more(post)">See more</button>
      </p>
    </x-card>
  </div>
</template>

<script>
import { store, bus } from '../app.js';

import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';
import NewPost from '../components/NewPost.vue';
import FontAwesomeIcon from '../components/FontAwesomeIcon.vue';

export default {
  components: {
    'x-card': Card,
    'x-modal': Modal,
    'x-new-post': NewPost,
    'x-fa': FontAwesomeIcon
  },

  data() {
    return {
      store: store,
      posts: store.posts,
      isActiveModal: false
    }
  },

  created() {
    this.posts.map(post => {
      post.seeMore = false;

      return post;
    });
  },

  computed: {
    latestPosts() {
      return this.posts.sort((a, b) => a.id < b.id);
    },

    seeMoreBtn() {
      return {

      }
    }
  },

  methods: {
    isOverflown(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    },

    more(post) {
      post.seeMore = true;
    },

    showNewPost() {
      this.isActiveModal = true;

      this.$nextTick(() => {
        this.$refs.titleInput.focus();
      });
    },

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
  max-height: 30em;
  overflow-y: hidden;
  position: relative;

  .see-more {
    max-height: inherit;
    overflow-y: inherit;
  }

  .body {
    white-space: pre-wrap;
  }
}

.addPost {
  border-radius: 50%;
  background-color: #00d1b2;
  color: white;
  cursor: pointer;
}
</style>