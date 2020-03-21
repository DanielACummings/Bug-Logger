<template>
	<div class="notes text-light">
		<div class="row">
			<div class="col-12">
				<div class="row">
					<div class="col-12">
						<h5>Notes</h5>
					</div>
				</div>
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
		<div class="col-3">
			<button
				type="button"
				class="btn btn-primary mt-4"
				data-toggle="modal"
				data-target="#add-note-modal"
				data-whatever="@getbootstrap"
			>Add Note</button>

			<div
				class="modal fade"
				id="add-note-modal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="add-note-modal-label"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="add-note-modal-label">Add Note</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form @submit.prevent="createNote">
								<div class="form-group">
									<label for="reported-by" class="col-form-label">Name:</label>
									<input
										type="text"
										v-model="newNote.reportedBy"
										class="form-control"
										id="reported-by"
										required
									/>
								</div>
								<div class="form-group">
									<label for="content" class="col-form-label">Message:</label>
									<input type="text" v-model="newNote.content" class="form-control" id="content" />
								</div>
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="submit" class="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
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