<template>
    <div class="riddle">
            <span class="box">
                <span class="title">Level {{level}}</span>
                <span class="question">{{msg}}</span>
                <a-input class="answer" v-model:value="answer" @change="answer===next && answerChange()" :bordered="false" placeholder="" />
            </span>
        <a-progress class="progress"
            type="circle"
            :stroke-color="{ '0%': '#108ee9', '100%': '#87d068', }"
            :percent="(level-1)*5" />

    </div>
</template>

<script lang="ts" src="./riddle.ts">
</script>

<style scoped>
.progress {
    position: absolute;
    top: 50px;
    right: 80px;
}
.title {
    display: block;
    text-align: center;
    font-family: 微软雅黑,Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    position: absolute;
    width: 100%;
    top: 20%;
    font-weight: 100;
    font-size: 8vh;
    letter-spacing: 1px;
}
.question {
    display: block;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 20%;
    top: 60%;
    text-align: center;
    font-size: 3vh;
}
.answer {
    display: block;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 30%;
    top: 60%;
    text-align: center;
    font-size: 3vh;
}
.box {
    position: absolute;
    width: 60vw;
    height: 60vh;
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
