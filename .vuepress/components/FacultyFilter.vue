<template>
  <div class="container ">
    <div class="shadow p-2 bg-white mb-2 rounded-top">
    <div class="row font-medium">
      <ul class="nav justify-content-center">
        <li class="nav-item"  v-for="(rank,index) in ranks" :key="index">
          <a :class="{'nav-link ':true, 'active': selectedRank==rank}" href="#" @click.prevent="filter(rank)">{{rank}}</a>
        </li>
    </ul>
    
  </div>
  <div class="row mb-3">
    <div class="col my-2">
      <input type="text" 
      class="form-control" 
      @input="filterByKey"
      v-model="keyword"
      placeholder="also you may filter by typing a keyword">
    </div>
    
  </div>
  </div>
  <h6 class="text-center mb-2 border-bottom border-success">{{selectedRank}}</h6>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "faculty_filter",
  data (){
    return {
      selectedRank: 'All',
      keyword: '',
      ranks: [ 'All'
      ]
    }
  },
  methods: {
    filter(rank){
      this.selectedRank=rank
        this.$emit('filter', rank)
    },
    filterByKey(){
      if (this.keyword.length===0){
        this.filter(this.selectedRank)
      }
      if (this.keyword.length>4){
        this.filter(this.selectedRank)
         this.$emit('filterByKey', this.keyword)
      }
    }
  },
  mounted(){
    axios.get('/data/files/faculty/ranks.json').then(ranks=>{
      this.ranks = [...this.ranks, ...ranks.data]
    })
  }

}
</script>

