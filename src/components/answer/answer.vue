<template>
    <div class="home">
        <div class="foot">

            <a v-if="footVisible" type="primary" @click="statistic" style="height: 100%; font-size: 30px; color: #ffffff;" block ghost>Have a good time</a>
            <div v-else>
                <a-button type="primary" @click="statistic" style="height: 50%" block>U found me!</a-button>
                <span style="height: 50%">{{info}}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./home.ts">
</script>
<style scoped>
.home{
    width: 100%;
    height: 100%;
}
.foot {
    position: absolute;
    bottom: 0;
    width:  100%;
    height: 10%;
    text-align:center;
}


</style>