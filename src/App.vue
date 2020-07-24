<template>
  <div id="app">
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <div class="navbar-item">
              <img src="logo.png" alt="logo">
            </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar-item img{
  max-height: 5.75rem;
}

body{
  background: no-repeat url('https://i.pinimg.com/originals/e1/11/5a/e1115afea56dcaf0c273a4f3d9fc7f3a.jpg');
  background-size: cover;
  background-repeat: repeat-y;
}

</style>
