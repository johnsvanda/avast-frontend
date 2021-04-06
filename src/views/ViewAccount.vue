<template>
  <div class="component">
    <div class="container">
      <h1>View accounts</h1>
      <label>View accounts that:</label>
      <select v-model="currentFilter" @change="handleChange">
        <option value="daysFilter">Were created in the last 15 days</option>
        <option value="lastFilter">The last 50 accounts</option>
      </select>
      <div class="accounts">
        <div
          v-for="(account, index) in this.arrayToRender"
          :key="index"
          class="account"
        >
          <h3>{{ account.name }}</h3>
          <p>{{ account.gender }}</p>
        </div>
      </div>
      <input
        type="button"
        value="Fetch mocked accounts"
        @click="fetchMockedAccounts"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewAccount",
  data() {
    return {
      arrayToRender: this.accounts,
      currentFilter: "daysFilter",
      accounts: [],
      lastDays: 15, // before how many days
      lastAccounts: 50,
    };
  },
  methods: {
    fetchAccounts() {
      console.log("fetch");
      this.axios
        .get("accounts")
        .then((res) => (this.accounts = res.data))
        .then(() => this.filterArray(this.currentFilter))
        .catch((err) => console.error(err));
    },

    fetchMockedAccounts() {
      this.axios
        .get("mockAccounts")
        .then((res) => {
          let mock = res.data.results.map((el) => {
            const obj = Object.assign({}, el);
            obj["created"] = Date.parse(el.created);
            return obj;
          });
          let tmp = this.accounts.concat(mock);
          this.accounts = tmp;
        })
        .then(() => this.filterArray(this.currentFilter))
        .catch((err) => console.error(err));
    },

    handleChange(e) {
      this.filterArray(e.target.value);
    },

    filterArray(filterType) {
      switch (filterType) {
        case "daysFilter": {
          this.arrayToRender = this.daysFilter(this.accounts);
          break;
        }
        case "lastFilter": {
          this.arrayToRender = this.lastFilter(this.accounts);
          break;
        }
        default:
          this.arrayToRender = this.accounts;
      }
    },

    daysFilter(array) {
      let milliseconds = this.lastDays * 60 * 60 * 24 * 1000; //15 days to miliseconds
      return array.filter((el) => el.created > Date.now() - milliseconds);
    },
    lastFilter(array) {
      return array.map((account, index) => {
        if (index < this.lastAccounts) return account;
      });
    },
  },
  mounted() {
    this.fetchAccounts();
  },
};
</script>

<style>
.account {
  width: 200px;
}

.account h1 {
  border-bottom: 1.5px solid #ccc;
}

.accounts {
  height: 500px;
  overflow-y: auto;
  border: 1.5px solid #ccc;
  border-radius: 0.25rem;
  padding: 8px 20px;
  outline: none;
  color: rgb(82, 82, 82);
}

input[type="button"] {
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
</style>
