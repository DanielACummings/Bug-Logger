<template>
	<div class="bug-info">
		<div class="row">
			<div class="col-12 text-success">
				<div class="row" :class="{ closed: bugData.closed}">
					<div class="col-3">{{bugData.title}}</div>
					<div class="col-3">{{bugData.reportedBy}}</div>
					<div class="col-3 status">
						<div v-if="bugData.closed == false">Open</div>
						<div v-else>Closed</div>
					</div>
					<div class="col-3">{{bugData.updatedAt}}</div>
				</div>
			</div>
			<div class="col-12 pt-5 text-light">
				<h5>Description</h5>
				<div>{{bugData.description}}</div>
			</div>
		</div>
		<div class="row pt-5 pb-5">
			<!-- Edit bug description modal form -->
			<div class="col-3 text-left">
				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#edit-description-modal"
					data-whatever="@getbootstrap"
				>Edit Description</button>

				<div
					class="modal fade"
					id="edit-description-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="edit-description-modal-label"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="edit-description-modal-label">Edit Description</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="editBug">
									<div class="form-group">
										<label for="description" class="col-form-label">Description:</label>
										<input type="text" v-model="editBug.description" class="form-control" id="title" required />
									</div>
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-primary">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-3 text-left">
				<button @click="closeBug" class="btn btn-danger" type="delete">Close Bug</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BugInfo",
	props: ["bugData"],
	mounted() {
		this.$store.dispatch("getBugById", this.$route.params.id);
	},
	computed: {
		activeBug() {
			return this.$store.state.activeBug;
		}
	},
	data() {
		return {
			editedBug: {
				description: "",
				id: this.bugData.id
			}
		};
	},
	methods: {
		closeBug(id) {
			let close = confirm("Are you sure?");
			if (close == true) {
				this.$store.dispatch("closeBug", this.bugData.id);
			}
		},
		editBug() {
			let bugEdit = { ...this.editedBug };
			this.$store.dispatch("editBug", bugEdit);
			this.editedBug = {
				description: ""
			};
		}
	}
};
</script>

<style>
.closed {
	color: red;
}
</style>