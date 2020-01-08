<template>
  <div class="notes">
    <div class="row">
      <div class="col-3">
        <br />
        <h5>Notes</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <p>Name</p>
      </div>
      <div class="col-9">
        <p>Message</p>
      </div>
      <div class="col-1">
        <p>Delete</p>
      </div>
    </div>
    <div v-for="note in notes" :key="note.id">
      <!-- notes inserted here -->
      <note :noteData="note" />
    </div>
    <form @submit.prevent="createNote">
      <input type="text" v-model="newNote.reportedBy" placeholder="Name" required />
      <input type="text" v-model="newNote.content" placeholder="Message" required />
      <button type="submit" class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script>
import Note from "@/components/Note";
export default {
  name: "Notes",
  mounted() {
    this.$store.dispatch("getNotesByBug", this.$route.params.id);
  },
  props: ["notesSection"],
  data() {
    return {
      newNote: {
        content: "",
        reportedBy: "",
        bug: this.$route.params.id
      }
    };
  },
  methods: {
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        content: "",
        reportedBy: "",
        bug: this.$route.params.id
      };
    }
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  components: {
    Note
  }
};
</script>

<style>
</style>