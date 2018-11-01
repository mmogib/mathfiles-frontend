<template>
  <div>
   <transition enter-active-class="animated bounce">
    <div class="text-center" v-if="loading">Loading please ... </div>
    <div v-else class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr >
            <th scope="col" class="w-5">#</th>
            <th scope="col" class="w-10">Year</th>
            <th scope="col" class="w-60">Title</th>
            <th scope="col" class="w-20">Authors</th>
            <th scope="col" class="w-5">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(report,index) in reports" :key="index">
            <th scope="row" class="w-5">{{index+1}}</th>
            <td class="w-10" >{{report.year}}</td>
            <td class="w-60" >{{report.title}}</td>
            <td class="w-10" >{{report.authors}}</td>
            <td class="w-10" >
              <a  
                        target="_blank" 
                        rel="noopener noreferrer"
                        :href="url+''+report.code+'.pdf'">
                        download
                        </a> 
              </td>
           
          </tr>
        </tbody>
      </table>
    </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      loading: false,
      reports:[],
      url: 'https://mathfiles.kfupm.edu.sa/data/files/techReportsData/'
    }
  },
  created(){
    this.loading =true
    axios.get('/data/files/TechnicalReports/technical_reports.json')
    .then(response=>{
      this.loading=false
      this.reports =response.data
    })
  }
}
</script>

<style>
</style>
