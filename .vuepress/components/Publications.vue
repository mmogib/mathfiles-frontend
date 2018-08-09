<template>
  <div>
    <select 
      v-model="year"
      @change="getPublications"
      class="custom-select">
      <option v-for="(year, index) in years" :value="year">{{year}}</option>
     
    </select>
    <transition enter-active-class="animated bounce">
    <div class="text-center" v-if="loading">Loading please ... </div>
    <publications-list
      v-else
      :list="list"
       />
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      year: new Date().getFullYear(),
      list:[],
      years: [],
      loading: false
    }
  },
  methods:{
    getPublications(){
      this.loading=true
      axios.get(`/data/files/publications/${this.year}.json`).then(response=>{
        this.list=response.data
        this.loading=false
      })    
    }
  },
  mounted(){
    this.loading=true
    axios.get('/data/files/publications/years.json').then(response=>{
      this.years=[...this.years, ...response.data]
    })
    this.getPublications(this.year)
  }
}
</script>
