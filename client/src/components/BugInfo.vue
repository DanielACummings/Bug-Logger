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
        <div class="row">
          <div class="col-12">
            <h5>Description</h5>
            <div>{{bugData.description}}</div>
          </div>
          <div class="col-12">
            <br />
            <form @submit.prevent="editBug">
              <textarea
                type="text"
                v-model="editedNote.description"
                placeholder="Edited Description"
                required
              />
              <button class="btn btn-warning">Edit</button>
            </form>
            <br />
            <button @click="closeBug" class="btn btn-danger" type="delete">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugInfo",
  props: ["bugData"],
  data() {
    return {
      editedNote: {
        description: ""
      }
    };
  },
  methods: {
    closeBug(id) {
      let close = confirm("Are you sure?");
      if (close == true) {
      }
    },
    editBug() {
      let edit = { ...this.editedNote };
      this.$store.dispatch("editBug", edit);
      this.editedNote = {
        description: ""
      };
    }
  }
};
</script>

<style>
</style>