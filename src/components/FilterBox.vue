<template>
  <div :class="`${filter} filter-item`" :style="`background-image:url(${이미지})`" @click="fire">
    <slot></slot>
  </div> 
</template>

<script>
export default {
    name: 'filterbox',

    props: {
        이미지: String,
        filter: String
    },

    methods: {
        fire() {
            this.emitter.emit('setFilter', this.filter)
        }
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>