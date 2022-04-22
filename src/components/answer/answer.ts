import { defineComponent, ref } from 'vue'
import riddle from '../riddle/riddle.vue'

export default defineComponent({
    components: { riddle },
    setup() {
        const footVisible = ref<boolean>(false)
        const info = ref<string>('hide_and_seek')
        const statistic = ():void => {
            footVisible.value = !footVisible.value
        }
        return { statistic, footVisible, info }
    },
})