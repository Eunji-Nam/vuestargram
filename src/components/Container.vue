<template>
  <div>
    <div v-if="step === 0">
      <Post :인스타데이터='post' v-for="(post, i) in 인스타데이터" :key="i"/>
    </div>
    
    <!-- 필터선택페이지 -->
    <div v-else-if="step === 1">
      <div :class="filter" class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="filters">
        <FilterBox :이미지="이미지" :filter="filter" v-for="filter in filterList" :key="filter">
          {{filter}}
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-else-if="step === 2">
      <div :class="filter" class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('write', $event.target.value)"></textarea>
      </div>
    </div>

    <div v-else-if="step === 3">
      <MyPage :one='1'/>
    </div>

  </div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue'
import MyPage from './MyPage.vue'

export default {
    name: 'Container',

    data() {
      return {
        filterList: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        filter: ''
      }
    },

    props: {
        인스타데이터: Array,
        step: Number,
        이미지: String,
    },

    components: {
        Post,
        FilterBox,
        MyPage
    },

    methods: {
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
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>