<template>
  <div id="app">
        <nav class="navbar is-dark">
        <div class="navbar-brand">
            <div class="navbar-item">
              <img src="logo.png" alt="logo">
            </div>
        </div>
        <div class="navbar-item">
          <router-link to="/artist">Artist</router-link>
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
</style>
