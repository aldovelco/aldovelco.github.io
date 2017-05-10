<template>
  <div class="content">
    <div class="columns">
      <div class="column is-11">
        <h1 class="title">Blog
          <span class="tag is-primary">{{ posts.length }}</span>
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
  
    <x-card v-for="post in latestPosts" :key="post.id" class="post" :ref="'post' + post.id">
      <span class="tag is-warning post-id">{{ `#${post.id}` }}</span>
      <div :class="{ 'see-more': !post.seeMore }">
        <h2 class="title is-4">{{ post.title }}</h2>
        <h3 class="subtitle is-6">{{ post.subtitle }}</h3>
        <hr>

        <p class="body">{{ post.body }}</p>
    
        <p class="has-text-centered" v-if="!post.seeMore">
          <button class="button is-primary is-outlined btn-see-more" :class="{ 'is-loading': post.isLoading }" @click="more(post)">See more</button>
        </p>
      </div>
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

  computed: {
    latestPosts() {
      return this.posts.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        }
        
        if (a.id < b.id) {
          return 1;
        }

        return 0;
      });
    }
  },

  methods: {
    isOverflown(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    },

    more(post) {
      post.isLoading = true;

      setTimeout(function() {
        post.seeMore = true;
        post.isLoading = false;
      }, 3000);
    },

    showNewPost() {
      this.isActiveModal = true;
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
  position: relative;
  word-wrap: break-word;

  .post-id {
    position: absolute;
    top: -1em;
    left: -1em;
  }

  .btn-see-more {
    position: absolute;
    bottom: 1em;

    &:focus {
      background-color: white;
    }
  }

  .body {
    white-space: pre-wrap;
  }
}

.see-more {
  overflow-y: hidden;
  max-height: 30em;  
}

.addPost {
  border-radius: 50%;
  background-color: #00d1b2;
  color: white;
  cursor: pointer;

  &:hover {
    color: #00d1b2;
    background-color: white;
  }
}
</style>