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
			<div class="col-12">
				<br />
				<form @submit.prevent="editBug">
					<input v-model="editedBug.description" type="text" placeholder="Edited Description" required />
					<button type="submit" class="btn btn-warning">Edit</button>
				</form>
				<button @click="closeBug" class="btn btn-danger mt-5 mb-5" type="delete">Close</button>
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