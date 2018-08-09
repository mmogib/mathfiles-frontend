<template>
  <div>
    <h5 class="float-right">({{list.length}}) articles</h5>

    <h4 :id="title" class="mt-3">Publications</h4>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col" class="w-10">Year</th>
            <th scope="col" class="w-20">Authors</th>
            <th scope="col" class="w-70">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article,index) in publications()" :key="index">
            <th scope="row" >{{index+1}}</th>
            <td class="w-10" >{{article.year}}</td>
            <td class="w-30" >{{getOtherAuthors(article)}}</td>
            <td class="w-70" v-html="article.title"></td>
           
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['list', 'title'],
  data(){
    return {
      others: []
    }
  },
  methods: {
    publications(){
        return this.list
    },
    getOtherAuthors(article){
      if (article.authors){
        return article.authors.toString()
      }
      else{
        return (this.others[article.code])? this.others[article.code].toString(): '' 

      }
      
    }
  },
  mounted(){
    axios.get('/data/files/publications/other_authors.json')
        .then(response=>{
          this.others=response.data
        })
  }
}

</script>

<style>
</style>
