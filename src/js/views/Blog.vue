<template>
  <div class="content">
    <h1 class="title">Blog
      <span class="tag is-light">{{ posts.length }}</span>
    </h1>
  
    <x-card v-for="post in latestPosts" :key="post.id" class="post">
      <h2 class="title is-4">{{ post.title }}</h2>
      <h3 class="subtitle is-6">{{ post.subtitle }}</h3>
      <p>{{ post.body }}</p>
    </x-card>
  
    <button class="button" @click="isActiveModal = true">Modal</button>
    <x-modal v-if="isActiveModal" @close="isActiveModal = false">
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
            <button class="button is-primary" @click="addPost" :disabled="submitButtonDisabled">Submit</button>
          </p>
          <p class="control">
            <button class="button is-link" @click="clearInputs">Cancel</button>
          </p>
        </div>
      </form>
    </x-modal>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';

export default {
  components: {
    'x-card': Card,
    'x-modal': Modal
  },

  data() {
    return {
      newPost: {
        title: '',
        subtitle: '',
        body: ''
      },
      isActiveModal: false,
      posts: [
        {
          id: 0,
          title: 'Test',
          subtitle: 'Test',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        },
        {
          id: 1,
          title: 'Test',
          subtitle: 'Test',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        },
        {
          id: 2,
          title: 'Test',
          subtitle: 'Test',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        },
        {
          id: 3,
          title: 'Test',
          subtitle: 'Test',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        }
      ]
    }
  },

  computed: {
    latestPosts() {
      return this.posts.sort((a, b) => a.id < b.id);
    },

    submitButtonDisabled() {
      return !(this.newPost.title && this.newPost.body);
    }
  },

  methods: {
    addPost() {
      this.posts.push({
        id: this.posts.length + 1,
        title: this.newPost.title,
        subtitle: this.newPost.subtitle,
        body: this.newPost.body
      });

      this.clearInputs();
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
.post {
  margin-bottom: 2em;
}

.label>span {
  color: red;
}
</style>