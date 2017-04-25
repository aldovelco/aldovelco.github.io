<template>
  <div class="content">
    <h1 class="title">Home</h1>
    <x-card>
      <div slot="content">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!
          </p>
        </div>
      </div>
    </x-card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    'x-card': Card
  }
}
</script>

<style lang="scss" scoped>
</style>