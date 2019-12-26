<template>
  <div class="Navbar">
    <div class="row">
      <div class="col-5">
        <h1>Bug Logger</h1>
      </div>
      <div class="col-7">
        <h3>Report A Bug</h3>
        <form @submit.prevent="createBug">
          <input required type="text" v-model="newBug.title" placeholder="Bug Title" />
          <input required type="text" v-model="newBug.description" placeholder="Description" />
          <input required type="text" v-model="newBug.reportedBy" placeholder="Your Name" />
          <button class="btn btn-success" type="submit">Report</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {},
  data() {
    return {
      newBug: {
        title: "",
        description: "",
        reportedBy: ""
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        title: "",
        description: "",
        reportedBy: ""
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h3 {
  margin: 10px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
