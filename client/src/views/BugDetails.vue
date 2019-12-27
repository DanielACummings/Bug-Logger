
<template>
  <div class="bug-details container">
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
      <div class="col-12">
        <bug-info :bugData="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import BugInfo from "@/components/BugInfo";
export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    BugInfo
  }
};
</script>

<style>
</style>