<template>
  <div class="note-component">
    <div class="row">
      <div class="col-2">
        <p>{{noteData.reportedBy}}</p>
      </div>
      <div class="col-9">
        <p>{{noteData.content}}</p>
      </div>
      <div class="col-1">
        <button @click="deleteNote" class="btn btn-danger">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["noteData"],
  data() {
    return {};
  },
  methods: {
    deleteNote() {
      let close = confirm("Are you sure?");
      if (close == true) {
        this.$store.dispatch("deleteNote", this.noteData._id);
      }
    }
  }
};
</script>

<style>
</style>