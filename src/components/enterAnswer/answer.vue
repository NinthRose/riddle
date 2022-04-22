<template>
    <div class="answer">
        <riddle :level="3" msg="选择我 找到我" next="hide_and_seek"></riddle>
        <div class="foot">
            <a v-if="!footVisible" type="primary" @click="statistic" style="height: 100%; font-size: 30px; color: #ffffff;" block ghost>Have a good time</a>
            <div v-else>
                <a-button type="primary" @click="statistic" style="height: 50%" block>U found me!</a-button>
                <span style="height: 50%">{{info}}</span>
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