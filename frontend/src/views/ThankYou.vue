<template>
  <main>
    <div class="goodbye">
            <h1>THANK YOU</h1>
            <h2>for your order</h2>
    </div>
    
    <button class="btn-goback" @click="goToStart"> SPEND MORE MONEY</button>
  </main>
</template>

<script>
export default {
    methods:{
        goToStart() {
			this.$router.push("/");
    }
}
}
</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;
}
.goodbye{

margin-top:200px;
}
.h1 {
    padding-top: 200px;
    font-size: 30px;
}

.h2 {
    font-size: 20px;
}
.btn-goback{

    width: 300px;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-bottom: 10%;
    margin-top: 200px;
}
</style>