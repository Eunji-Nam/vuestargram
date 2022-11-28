<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <!-- <input placeholder="🔍" @input="doThis($event.target.value)"/> -->
    <input placeholder="🔍" v-model="searchInput"/>
    <div class="post-header" v-for="(follower, i) in doThis" :key="i">
        <div class="profile" :style="`background-image:url(${follower.image})`"></div>
        <span class="profile-name">{{follower.name}}</span>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
import axios from 'axios'
// import {useStore} from 'vuex'

export default {
    name: 'mypage', 
    // setup() {   // 첫째 파라미터는 항상 props. 두번째 파라미터는 달러표시 변수들(attrs, alots, emit 등)
    //     let followers = ref([]) // 그 나머지 자료형 집어넣음. 헷갈리니 모두 ref를 사용해도 상관없음
    //     let followersOriginal = ref([])
    //     // let test = reactive({}) // 보통 array, object 집어넣음

    //     // let { one } = toRefs(props); // props는 항목이 여러개일 수 있기 때문에 toRefs를 사용
    //     // console.log(one.value)

    //     // let re = computed(()=>{ return followers.value.length })
    //     // console.log(re)

    //     // vuex사용
    //     // let store = useStore();
    //     // console.log(store.state.name)

    //     function doThis(word) {
    //         let newFollowers = followersOriginal.value.filter((a)=>{ 
    //             return a.name.indexOf(word) != -1 
    //         })
            
    //         followers.value = [...newFollowers]

    //         console.log(followers.value)
    //     }
        

    //     onMounted(() => {
    //         axios.get('/follower.json')
    //         .then((a) => {
    //             followers.value = a.data
    //             followersOriginal.value = [...a.data]
    //         })
    //     })

    //     return {followers, doThis}
    // }, 

    data() {
        return {
            followers: [],
            searchlist: [],
            searchInput: '',
        }
    },

    mounted() {
        axios.get('/follower.json')
        .then((a) => {
            this.followers = a.data
        })
    },

    computed: {
        doThis() {
            let newFollowers = []
            newFollowers = this.followers.filter((a)=>{ return a.name.includes(this.searchInput)})
            return newFollowers
        }
    }
}
</script>

<style>

</style>