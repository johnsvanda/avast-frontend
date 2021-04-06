<template>
  <CreateAccount msg="Welcome to Your Vue.js App" />
  <ViewAccount @refreshAccounts="fetchAccounts" />
</template>

<script>
import CreateAccount from "./components/CreateAccount.vue";
import ViewAccount from "./components/ViewAccount.vue";

export default {
  name: "App",
  components: {
    CreateAccount,
    ViewAccount,
  },
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
  width: 40%;
  margin: 3rem auto;
  box-shadow: 2px 2px 8px;
  background-color: white;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}
</style>
