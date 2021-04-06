<template>
  <div class="nav">
    <router-link to="/">Create Account</router-link>
    <router-link to="/ViewAccounts">View Accounts</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
.component {
  border-radius: 0.35rem;
  width: 45%;
  margin: 3rem auto;
  box-shadow: 2px 2px 8px;
  background-color: white;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.nav {
  border-radius: 0.35rem;
  width: 45%;
  margin: auto;
  box-shadow: 2px 2px 8px;
  background-color: white;
  padding: 1.3rem 0;
}

.router-link-active {
  color: #1b7fdd;
  border-bottom-color: #1b7fdd !important;
}

.nav a {
  text-decoration: none;
  margin: 1rem;
  padding: 1.25rem;
  border-bottom: 2px solid #c4c4c4;
}

a {
  color: rgb(78, 78, 78);
}
</style>
