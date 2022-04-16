import {debounce} from '@/components/common/utils/utils'
export const itemListenerMixin = {
    data() {
        return {
            itemImgLitener:null,
            newRefresh:null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh,100)
        this.itemImgLitener=()=>{
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgLitener)
    },
}