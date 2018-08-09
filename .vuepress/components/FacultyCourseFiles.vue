<template>
  <div>
     <div class="row" v-if="loading">
        <div class="col" >
              Loading please wait... 
        </div>
      </div>
    <div v-else>
    <h4>Course Files</h4>
    <!-- {{course_files}}-->
    <div class="table-responsive">
      <table class="table table-hover">
         <thead>
          <tr >
            <th scope="col"  class="w-5">#</th>
            <th scope="col" class="w-10">Term</th>
            <th scope="col" class="w-10">Course</th>
            <th scope="col" class="w-10">Section</th>
            <th scope="col" class="w-100">Files</th>
          </tr>
        </thead>
        <tbody>
          <tr 
          v-for="(file,index) in course_files"
          :key="index"
          >
            <td>{{index+1}}</td>
            <td>{{file.term}}</td>
            <td>{{file.course}}</td>
            <td>{{file.section}}</td>
            <td>
              <div class="course-files">
                <span 
                  v-for="(doc,ind) in file.docs" :key="ind">
                <a  
                  target="_blank" 
                  rel="noopener noreferrer"
                  :href="url.replace(/TERM/, file.term).replace(/FILE_LINK/, doc.link)">{{doc.name}}</a> 
                </span>
              </div>
            </td>
          </tr>  
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['username'],
  data(){
    return {
      loading: true,
      course_files:[],
      url: 'https://mathfiles.kfupm.edu.sa/data/files/courseFilesData/TERM/FILE_LINK'
    }
  },
  mounted(){
    this.loading=false
    axios.get('/data/files/faculty/faculty_course_files.json')
    .then(response=>{
      this.course_files = response.data[this.username].sort((a,b)=>{
        return (parseInt(a.term)<=parseInt(b.term))? 1:-1
      })
     
      this.loading=false
    })
  }

}
</script>

<style>
.course-files {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2px;
}
</style>
