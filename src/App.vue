<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>

    <ul class="header-button-right">
      <li v-if="step === 0" @click="step = 3">팔로워</li>
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
      <li v-if="step === 3" @click="step = 0">HOME</li>
    </ul>

    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <h4>안녕 {{ name }}  {{ likes }}  {{ 내이름 }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>

  <h4>{{ age }}</h4>
  <button @click="plus()">+</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <Container :인스타데이터='인스타데이터' :step='step' :이미지='이미지' @write='msg = $event'/>

  <!-- <button @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <!-- <div v-if="버튼 === 0">내용0</div>
 <div v-else-if="버튼 === 1">내용1</div>
 <div v-else-if="버튼 === 2">내용2</div>
 <button @click="clickBtn(0)">버튼0</button>
 <button @click="clickBtn(1)">버튼1</button>
 <button @click="clickBtn(2)">버튼2</button> -->
</template>

<script>
import data from './assets/data'
import Container from './components/Container.vue';
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'

axios.post()

export default {
  name: 'App',

  components: {
    Container
  },

  data() {
    return {
      인스타데이터: data,
      // 더보기: 0,
      // 버튼: 0,
      step: 0,
      이미지: '',
      msg: '',
      filter: ''
    }
  },

  computed: {
    // name() {
    //   return this.$store.state.name
    // },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 내이름: 'name' })
  },

  methods: {
    ...mapMutations(['setMore', 'like', 'plus']), 


    upload(e) {
      let 파일 = e.target.files
      console.log(파일[0])
      let url = URL.createObjectURL(파일[0])
      this.이미지 = url
      console.log(url)
      this.step++
    },
    // clickBtn(n) {
    //   this.버튼 = n
    // },

    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then( response => {
        this.인스타데이터.push(response.data);
        this.더보기++;
      })
      // if (this.더보기 === 0) {
      //   axios.get('https://codingapple1.github.io/vue/more0.json')
      //   .then((response) => {
      //     console.log(response.data)
      //     this.더보기++
      //     this.인스타데이터.push(response.data)
      //   })
      //   .catch((error) => {error})
      // } else if( this.더보기 === 1) {
      //   axios.get('https://codingapple1.github.io/vue/more1.json')
      //   .then((response) => {
      //     console.log(response.data)
      //     this.인스타데이터.push(response.data)
      //   })
      //   .catch((error) => {error})
      // }
    },

    publish() {
      const 게시물 = {
        name: "Mungji",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.msg,
        filter: this.filter
      }
      this.인스타데이터.unshift(게시물)
      this.step = 0
      console.log(this.msg)
    }
  },

  mounted() {
    this.emitter.on('setFilter', (a) => {
      this.filter = a
      console.log(a)
    })
  }
}
</script>

<style>
/* @import 'style.css'; */

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
