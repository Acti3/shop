<template>
    <div v-if="Object.keys(commentInfo).length!==0" class="comment-info">
        <div class="info-header">
            <div class="hearder-title">用户评价</div>
            <div class="hearder-more">更多</div>
        </div>
        <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <div class="info-detail">
            <p>{{commentInfo.content}}</p>
            <div class="info-other">
                <span class="data">{{commentInfo.created|ShowData}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-imgs">
                <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index"> 
            </div>
        </div>
    </div>
</template>
<script>
import {formatData} from '@/components/common/utils/utils' 
export default {
    name:'DetailCommentInfo',
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        ShowData(value){
            const date = new Date(value * 1000)
            return formatData(date,'yyyy-MM-dd  ')
        }
    }
}
</script>

<style> 
    .comment-info{
        padding: 5px 12px;
        color: #333;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-hearder{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .hearder-title{
        float: left;
        font-size: 15px;
    }
    .hearder-more{
        float: right;
        margin-right: 10px;
        font-size: 13px;
    }
    .info-user{
        padding: 30px 0 5px;
    }
    .info-user img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
    .info-user span{
        position: relative;
        font-size: 13px;
        top: -15px;
        margin-left: 10px;
    }
    .info-detail{
        padding: 0 5px 15px;    
    }
    .info-detail p{
        font-size: 14px;
        color: #999;
        line-height: 1.5;
    }
    .info-detail .info-other{
        color: #999;
        margin-top: 10px;
        font-size: 12px;
    }
    .info-imgs{
        margin-top: 10px;
    }
    .info-imgs img{
        width: 70px;
        height: 70px;
        margin-right: 5px;
    }
</style>