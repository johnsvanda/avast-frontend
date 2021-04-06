<template>
  <form @submit.prevent="handleSubmit" class="component">
    <div class="container">
      <h1>Create account</h1>

      <div class="form-group">
        <label>Name:</label>
        <input type="text" required v-model="name" />
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input type="email" required v-model="email" />
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input
          type="password"
          autocomplete="new-password"
          required
          v-model="password"
        />
      </div>

      <div class="form-group">
        <label>Gender:</label>
        <select v-model="gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <Alert v-show="this.submitStatus" :msg="this.alertMsg" :type="status" />
      <input type="submit" value="Submit" />
    </div>
  </form>
  <button @click="this.$emit('refreshAccounts')">emit</button>
</template>

<script>
import Alert from "./Alert.vue";
export default {
  name: "CreateAccount",
  components: {
    Alert,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      gender: "",
      submitStatus: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        gender: this.gender,
        created: Date.now(),
      };
      this.axios
        .post("/registerAccount", data)
        .then((res) => {
          this.submitStatus = res;
          console.log(res);
          this.alertDisappear();
        })
        .catch((err) => {
          this.submitStatus = err;
          console.error(err);
          this.alertDisappear();
        });
    },
    alertDisappear() {
      setTimeout(() => {
        this.submitStatus = "";
      }, 4000);
    },
  },
  computed: {
    status() {
      return this.submitStatus.status === 200 ? "success" : "error";
    },
    alertMsg() {
      return this.status === "success"
        ? this.submitStatus.data
        : "Something went wrong";
    },
  },
};
</script>

<style local>
.form-group {
  margin: 1rem;
}

input,
select {
  width: 100%;
  padding: 8px 20px;
  margin: 16px 0;
  display: inline-block;
  border: none;
  border-bottom: 1.5px solid #ccc;
  box-sizing: border-box;
  outline: none;
  font-size: 18px;
  color: rgb(82, 82, 82);
}

select {
  border: 1.5px solid #ccc;
  border-radius: 0.25rem;
}

input:focus,
select:focus {
  border-color: #2c8fec;
}

label {
  text-transform: uppercase;
  color: rgb(97, 97, 97);
  font-size: 14px;
}

input[type="submit"] {
  width: 30%;
  background-color: #1b7fdd;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  font-size: 14px;
  text-transform: uppercase;
}

input[type="submit"]:hover {
  background-color: #2c8fec;
}
</style>
