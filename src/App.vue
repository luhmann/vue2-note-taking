<template>
  <div class="container" id="app">
    <router-link to="home">Home</router-link>
    <router-link to="editor">Editor</router-link>
    <router-link to="impress">Impressum</router-link>
    <router-view></router-view>
  </div>
</template>


<style lang="stylus">
  @import "~milligram/dist/milligram.css"

  *
    box-sizing border-box
    position relative
</style>
