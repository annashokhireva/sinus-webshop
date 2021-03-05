<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav/>
			</template>
		</main-header>

		<div class="main">
            <div class="container-1">
                My account
                <div class="account-info">
               </div>
            </div>
<br>
            <div class="container-2">
            previous orders
                <div class="previous-orders">
                </div>
            </div>


		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';


export default {
	components: {
		MainHeader,
		MainNav
	},

}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: row;
    align-content:space-between;
    margin: auto auto auto auto;
    justify-content: center;
    width: 80%;
}

.container-1 {
    width: 300px;
    height: 400px;
    background-color: #F5F4F0;
    padding-right: 20px;;
}
.container-2 {
    width: 300px;
    height: 400px;
    background-color: #F5F4F0;
    margin-left: 200px;
}
.row {
  margin:0 -150px;
}
.col-xx-xx {
  padding:0 15px;
}
</style>