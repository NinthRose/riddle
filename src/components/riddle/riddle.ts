import { message } from 'ant-design-vue'
import { defineComponent, onMounted, ref } from 'vue'
import router from '../../router'

export default defineComponent({
    props: ['level', 'msg', 'next'],
    setup() {
        onMounted(() => {
            routerMap.set('答案', 'answer')
            routerMap.set('入答案', 'enterAnswer')
            routerMap.set('捉迷藏', 'hide_and_seek')
        })
        const routerMap = new Map()
        const answer = ref<string>('')
        const answerChange = ():void => {
            message.success("恭喜过关")
            var path = answer.value
            if (routerMap.has(answer.value)) {
                path = routerMap.get(answer.value)
            }
            router.push(`/${path}`)
        }
        return { answer, answerChange }
    },
})