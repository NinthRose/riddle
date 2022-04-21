import { defineComponent, ref } from 'vue'
import riddle from '../riddle/riddle.vue'

export default defineComponent({
    components: { riddle },
    setup() {
        defineProps<{ riddle: string, answer: string }>()
        const footVisible = ref<boolean>(false)
        const info = ref<string>(' test \ntest')
        const statistic = ():void => {
            footVisible.value = !footVisible.value
        }
        return { riddle, statistic, footVisible, info }
    },
})