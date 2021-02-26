<template>
	<div class="main-modal" 
		v-if="visible"
		@keydown.esc="hideModal"
		@click.self="hideModal"
	>
		<div class="modal-content">
			<button class="cross" @click="hideModal">
				<img src="../../assets/icons/cross.svg" width="24" alt="X">
			</button>
			
			<div class="inner-content">
				<component :is="component" />
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			component: null,
		};
	},

	computed: {
		...mapState({
			visible: 'modalVisible',
			modalComponent: 'modalComponent',
		}),
	},

	watch: {
		modalComponent(componentName) {
			if (!componentName) return;

			Vue.component(componentName, () => import(`@/components/modals/${componentName}`));

			this.component = componentName;
		},
	},

	created() {
		const escapeHandler = (e) => {
		if (e.key === 'Escape' && this.visible) {
			this.hideModal();
		}
	};

		document.addEventListener('keydown', escapeHandler);
		this.$once('hook:destroyed', () => {
		document.removeEventListener('keydown', escapeHandler);
		});
	},

	methods: {
		...mapMutations([
		'hideModal',
		]),
	},
}
</script>

<style lang="scss" scoped>
	.main-modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(3px);
		padding: 10% 15%;
		z-index: 2;
	}

	.cross {
		position: fixed;
		right: 15%;
		z-index: 3;
	}

	.modal-content {
		width: 100%;
		height: 100%;
		background-color: $bkg_gray;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.inner-content {
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
	}
</style>