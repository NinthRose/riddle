<template>
    <div class="home">
        <span class="name">Riddle Game</span>
        <a class="name home_button" style="font-size: 3vh" @click="ruleVisible=!ruleVisible">规则</a>
        <div class="rule" v-if="ruleVisible">
            <br><span>为确保您的游戏体验 请使用PC进行游戏(Chrome最佳)</span>
            <br><span>谜题涉及电脑知识,语言学,梗等等。</span>
            <br><span>不会因为不懂计算机而卡关,</span>
            <br><span>因为这同时也检验了您的搜索水平。</span>
            <br><span>答案大小写并<b>不敏感</b>，请安心食用</span>
            <a class="name home_button" style="font-size: 3vh" @click="ruleVisible=false, riddleVisible=true">开始</a>
        </div>
        <riddle v-if="riddleVisible" :level="1" msg="请输入答案" next="答案"></riddle>
    </div>
</template>
<script lang="ts" src="./home.ts">
</script>
<style scoped>
.home{
    width: 100%;
    height: 100%;
}
.name {
    display: block;
    text-align: center;
    color: #35495e;
    width: 100%;
    top: 30vh;
    margin: 20px auto;
    font-weight: 100;
    font-size: 8vh;
    letter-spacing: 1px;
}
.rule {
    position: absolute;
    width: 60vw;
    height: 45vh;
    top: 25vh;
    left: 20vw;
    border: 2px solid #35495e;
    border-radius: 10px;
    background: #fff;
    text-align: center;
    overflow-y: auto;
    font-size: 2.5vh;
    line-height: 200%;
}
</style>
