<template>
  <div class="content">
    <h1 class="title">Blog <span class="tag is-light">{{ posts.length }}</span></h1>
  
    <x-card v-for="post in posts" :key="post.id" class="post">
      <h2 class="title is-4">{{ post.title }}</h2>
      <h3 class="subtitle is-6">{{ post.subtitle }}</h3>
      <p>{{ post.body }}</p>
    </x-card>
  
    <form @submit.prevent>
      <div class="field">
        <label class="label">Title</label>
        <p class="control">
          <input class="input" type="text" placeholder="Put your title here!" ref="titleInput" v-model="newPost.title">
        </p>
      </div>
  
      <div class="field">
        <label class="label">Username</label>
        <p class="control">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
        </p>
        <p class="help is-success">This username is available</p>
      </div>
  
      <div class="field">
        <label class="label">Subtitle</label>
        <p class="control">
          <input class="input" type="text" placeholder="(Optional)" v-model="newPost.subtitle">
        </p>
      </div>
  
      <div class="field">
        <label class="label">Body</label>
        <p class="control">
          <textarea class="textarea" placeholder="Your content goes here" v-model="newPost.body"></textarea>
        </p>
      </div>
  
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-primary" @click="addPost">Submit</button>
        </p>
        <p class="control">
          <button class="button is-link" @click="clear">Cancel</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  data() {
    return {
      newPost: {
        title: '',
        subtitle: '',
        body: ''
      },
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

  methods: {
    addPost() {
      // TODO: Add logic to return if validation doesn't pass
      this.validateInputs();

      this.posts.push({
        id: this.posts.length + 1,
        title: this.newPost.title,
        subtitle: this.newPost.subtitle,
        body: this.newPost.body
      });

      this.clearInputs();
    },

    validateInputs() {
      if (this.newPost.title === '') {
        console.log('New post title is required.');
        this.$refs.titleInput.focus();

        return;
      }

      if (this.newPost.body === '') {
        console.debug('New post body is required.');
        this.$refs.bodyInput.focus();

        return;
      }

      // TODO: Add danger classes to required inputs if empty
    },

    clearInputs() {
      this.newPost.title = '';
      this.newPost.subtitle = '';
      this.newPost.body = '';
    }

  },

  components: {
    'x-card': Card
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 2em;
}
</style>