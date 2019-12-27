<template>
  <div class="home container">
    <br />
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <h5>Title</h5>
          </div>
          <div class="col-3">
            <h5>Reported By</h5>
          </div>
          <div class="col-3">
            <h5>Closed</h5>
          </div>
          <div class="col-3">
            <h5>Last Modified</h5>
          </div>
        </div>
      </div>
      <div class="col-12" v-for="bug in bugs" :key="bug.id">
        <!-- bugs inserted here -->
        <bug-component :bugData="bug" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src;
import BugComponent from "@/components/BugComponent";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {
    BugComponent
  }
};
</script>
