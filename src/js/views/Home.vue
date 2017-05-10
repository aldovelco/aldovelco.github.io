<template>
  <div class="content">
    <h1 class="title">Home</h1>
    <div class="tile is-ancestor">
      
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title is-4">Education</p>
          <hr>
          <p class="subtitle">Universidad Tecmilenio</p>
          <p class="subtitle is-6">Bachelor's Degree, GPA 4.0</p>
          <p>Computer Software Engineering</p>
          <p>2014 - 2018</p>
          <p></p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title is-4">Skills</p>
          <hr>
          <div class="content">
            <span class="tag is-large skill">C#</span>
            <span class="tag is-large skill">PHP</span>
            <span class="tag is-large skill">Laravel</span>
            <span class="tag is-large skill">Xamarin</span>
            <span class="tag is-large skill">Android</span>
            <span class="tag is-large skill">Java</span>
            <span class="tag is-large skill">JavaScript</span>
            <span class="tag is-large skill">HTML</span>
            <span class="tag is-large skill">CSS</span>
            <span class="tag is-large skill">SQL</span>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title is-4">Experience</p>
          <hr>
          <p class="subtitle">Hypertek</p>
          <p>
            Oct 2015 - Mar 2017 | 1 yr 6 mos
            <br> Monterrey
          </p>
          <p>Mobile applications development with Xamarin and full stack web development.</p>
  
          <p class="subtitle">Consultant</p>
          <p>
            Feb 2017 - Current
            <br> Monterrey
          </p>
          <p>Functional Testing.</p>
        </article>
      </div>
      <div class="tile is-vertical is-4">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <p class="title is-4">Languages</p>
              <hr>
              <p class="subtitle">Spanish</p>
              <p class="subtitle">English</p>
            </article>
          </div>
        </div>
      </div>  
    </div>
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
.skill {
  margin-bottom: 1em;

  &:hover {
    background-color: #222;
    color: white;
  }
}
</style>