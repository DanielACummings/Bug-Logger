<template>
	<div class="bug-component">
		<router-link :to="{name: 'bugDetails', params: {id: bugData.id}}">
			<div class="row text-success">
				<div class="col-12">
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
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "BugComponent",
	props: ["bugData"]
};
</script>

<style>
.closed {
	color: red;
}
</style>