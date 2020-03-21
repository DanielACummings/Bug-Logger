<template>
	<div class="Navbar">
		<div class="row">
			<div class="col-5">
				<router-link :to="{name: 'home'}">
					<h1 class="text-success">Bug Logger</h1>
				</router-link>
			</div>
			<div class="col-7">
				<div class="row">
					<!-- Report bug modal -->
					<div class="col-3">
						<button
							type="button"
							class="btn btn-primary mt-4"
							data-toggle="modal"
							data-target="#reportBugModal"
							data-whatever="@getbootstrap"
						>Report Bug</button>

						<div
							class="modal fade"
							id="reportBugModal"
							tabindex="-1"
							role="dialog"
							aria-labelledby="reportBugModalLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="newPicModalLabel">Report Bug</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form @submit.prevent="createBug">
											<div class="form-group">
												<label for="title" class="col-form-label">Title:</label>
												<input type="text" v-model="newBug.title" class="form-control" id="title" required />
											</div>
											<div class="form-group">
												<label for="description" class="col-form-label">Description:</label>
												<input type="text" v-model="newBug.description" class="form-control" id="description" />
											</div>
											<div class="form-group">
												<label for="your-name" class="col-form-label">Your Name:</label>
												<input
													type="text"
													v-model="newBug.reportedBy"
													class="form-control"
													id="your-name"
													required
												/>
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
			</div>
		</div>
	</div>
</template>

<script>
import router from "../router";
export default {
	name: "Navbar",
	mounted() {},
	data() {
		return {
			newBug: {
				title: "",
				description: "",
				reportedBy: ""
			}
		};
	},
	methods: {
		createBug() {
			let bug = { ...this.newBug };
			this.$store.dispatch("createBug", bug);
			this.newBug = {
				title: "",
				description: "",
				reportedBy: ""
			};
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h3 {
	margin: 10px 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
