<template>
  <div>
    <select 
      v-model="term"
      @change="getSyllabi"
      class="custom-select">
      <option v-for="(term, index) in terms" :value="term">{{term}}</option>
     
    </select>
    <transition enter-active-class="animated bounce">
    <div class="text-center" v-if="loading">Loading please ... </div>
    <syllabus-list
      v-else
      :list="list"
       /> -->
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      term: null,
      list:[],
      terms: [],
      loading: false
    }
  },
  methods:{
    getSyllabi(){
      this.loading=true
      axios.get(`/data/files/syllabi/syllabus_links.json`).then(response=>{
        this.list=response.data.filter(value=>{
          
          return value.term == this.term
        })
        this.loading=false
      })    
    }
  },
  mounted(){
    this.loading=true
    axios.get('/data/files/syllabi/syllabus_terms.json').then(response=>{
      this.terms= response.data
      this.term = response.data[0]
    })
    this.getSyllabi()
  }
}
</script>
