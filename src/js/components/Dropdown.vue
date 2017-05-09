<template>
  <div class="has-dropdown" :class="{ 'is-active': active }">
    <slot name="trigger">  
      <a class="toggle" @click="active = !active">Trigger</a>
    </slot>
    <ul class="dropdown">
      <slot name="dropdown">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #333;
  padding: 20px;
}

.has-dropdown {
  position: relative;
  display: inline-block;
  background: #00d1b2;
  border-radius: 3px 3px 0 0;

  padding: 8px 0;
  .toggle {
  border-radius: 3px 3px 0 0;
    padding: 8px 16px;
    background: #00d1b2;
  color: white;
  }
  .dropdown {
    position: absolute;
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #efefef;
    color: #333;
    top: 100%;
    li {
      display: inline-block;
      overflow-x: visible;
      padding: 8px 0;
    }
  }
  .toggle:hover {
    background-color: rgba(10, 10, 10, .2);
    color: white;
  }
}

.is-active {
  .toggle {
    border-radius: 3px 3px 0 0;
    background-color: #fff;
    color: #00d1b2;
    &:hover {
      
    }
  }
  .dropdown {
    display: block;
    li {
      background-color: #e5e5e5;
      color: #333;
      width: 100%;
      padding: 8px;

      &:hover {
        background-color: rgba(10, 10, 10, .2);
      }
    }
  }
}
</style>
