import { defineComponent, ref } from 'vue'
import riddle from '../riddle/riddle.vue'

export default defineComponent({
    components: { riddle },
    setup() {
        const footVisible = ref<boolean>(false)
        const statistic = ():void => {
            footVisible.value = !footVisible.value
        }
        return { statistic, footVisible }
    },
})