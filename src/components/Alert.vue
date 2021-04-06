<template>
  <div class="alert" :class="{ success: type === 'success' }">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["msg", "type"],
};
</script>

<style>
.alert {
  padding: 20px;
  color: white;
  background-color: red;
  border-radius: 0.25rem;
  transition: 2s;
}

.success {
  background-color: #127900;
}
</style>
