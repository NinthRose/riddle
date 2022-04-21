import { defineComponent, ref } from 'vue'
import riddle from '../riddle/riddle.vue'

export default defineComponent({
    components: { riddle },
    setup() {
        const ruleVisible = ref<boolean>(false)
        const riddleVisible = ref<boolean>(false)
        return { ruleVisible, riddleVisible }
    },
})