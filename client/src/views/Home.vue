<template>
  <div class="home container">
    <br />
    <div class="row">
      <input @click="filtered = !filtered" type="checkbox" name="checkbox" value="checkbox" />
      <p>Only show open bugs</p>
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
      <div class="col-12" v-if="!filtered">
        <!-- bugs inserted here -->
        <bug-component v-for="bug in bugs" :key="bug.id" :bugData="bug" />
      </div>
      <div class="col-12" v-else>
        <!-- bugs inserted here -->
        <bug-component v-for="bug in openBugs" :key="bug.id" :bugData="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import BugComponent from "@/components/BugComponent";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      filtered: false
    };
  },
  components: {
    BugComponent
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    openBugs() {
      return this.bugs.filter(b => !b.closed);
    }
  },
  methods: {
    getOpenBugs() {
      this.$store.dispatch("getOpenBugs");
    }
  }
};
</script>
