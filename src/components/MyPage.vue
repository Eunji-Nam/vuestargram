<template>
  <div style="padding : 10px">
    <h4>ํ๋ก์</h4>
    <!-- <input placeholder="๐" @input="doThis($event.target.value)"/> -->
    <input placeholder="๐" v-model="searchInput"/>
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
    // setup() {   // ์ฒซ์งธ ํ๋ผ๋ฏธํฐ๋ ํญ์ props. ๋๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ ๋ฌ๋ฌํ์ ๋ณ์๋ค(attrs, alots, emit ๋ฑ)
    //     let followers = ref([]) // ๊ทธ ๋๋จธ์ง ์๋ฃํ ์ง์ด๋ฃ์. ํท๊ฐ๋ฆฌ๋ ๋ชจ๋ ref๋ฅผ ์ฌ์ฉํด๋ ์๊ด์์
    //     let followersOriginal = ref([])
    //     // let test = reactive({}) // ๋ณดํต array, object ์ง์ด๋ฃ์

    //     // let { one } = toRefs(props); // props๋ ํญ๋ชฉ์ด ์ฌ๋ฌ๊ฐ์ผ ์ ์๊ธฐ ๋๋ฌธ์ toRefs๋ฅผ ์ฌ์ฉ
    //     // console.log(one.value)

    //     // let re = computed(()=>{ return followers.value.length })
    //     // console.log(re)

    //     // vuex์ฌ์ฉ
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