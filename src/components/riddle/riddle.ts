import { message } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'
import router from '../../router'

export default defineComponent({
    props: ['level', 'msg', 'next'],
    mounted() {
        
    },
    setup() {
        const answer = ref<string>('')
        const answerChange = ():void => {
            message.success("恭喜过关")
            if (answer.value === '答案') {
                router.push(`/answer`)
            } else {
                router.push(`/${answer}`)
            }
        }
        return { answer, answerChange }
    },
})