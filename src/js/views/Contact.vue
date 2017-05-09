<template>
  <div class="content">
    <h1 class="title">Contact</h1>

    <form @submit.prevent>
    <div class="field">
      <label class="label">From
        <span> *</span>
      </label>
      <p class="control">
        <input class="input" type="email" placeholder="Put your email here!" ref="emailInput" v-model="email.from" required autofocus>
      </p>
    </div>
  
    <div class="field">
      <label class="label">Subject</label>
      <p class="control">
        <input class="input" type="text" placeholder="(Optional)" v-model="email.subject">
      </p>
    </div>
  
    <div class="field">
      <label class="label">Message
        <span> *</span>
      </label>
      <p class="control">
        <textarea class="textarea" placeholder="Your message goes here" ref="messageInput" v-model="email.message" required></textarea>
      </p>
    </div>
  
    <div class="field">
      <p class="control">
        <button class="button is-primary" @click="onSubmit" :disabled="submitDisabled">Send</button>
      </p>
    </div>
  </form>
  </div>
</template>

<script>
import {store, bus} from '../app.js';

export default {
  components: {
  },

  data() {
    return {
      email: {
        from: '',
        subject: '',
        message: ''
      }
    }
  },

  computed: {
    submitDisabled() {
      return ! (this.email.from && this.email.message);
    }
  },

  methods: {
    onSubmit() {
      bus.$emit('notify', {
        type: 'info',
        message: 'An email has been sent to Aldo Velasco'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.label > span {
  color: red;
}
</style>