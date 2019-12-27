<template>
  <div class="bug-info">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3">{{bugData.title}}</div>
          <div class="col-3">{{bugData.reportedBy}}</div>
          <div class="col-3">{{bugData.closed}}</div>
          <div class="col-3">{{bugData.updatedAt}}</div>
        </div>
        <br />
        <h5>Description</h5>
        <div class="col-12">{{bugData.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugInfo",
  props: ["bugData"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>