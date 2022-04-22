<template>
    <div class="answer">
        <riddle :level="3" msg="找到我" next="捉迷藏"></riddle>
        <div class="foot">
            <a v-if="!footVisible" type="primary" @click="statistic" style="height: 100%; font-size: 30px; color: #ffffff;" block ghost>Have a good time</a>
            <div v-else>
                <span style="height: 50%; font-size:large;">你找到我啦</span>
                <br>
                <span style="height: 50%; font-size:smaller;">这个游戏叫什么?</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./answer.ts">
</script>
<style scoped>
.answer {
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