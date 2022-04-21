import { message } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    props: ['level', 'msg', 'next'],
    mounted() {
        
    },
    setup() {
        const answer = ref<string>('')
        const answerChange = ():void => {
            message.success("恭喜过关")
        }
        return { answer, answerChange }
    },
})