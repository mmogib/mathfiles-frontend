<template>
  <div>
      <div class="row" v-if="loading">
        <div class="col" >
              Loading please wait... 
        </div>
      </div> 
      <div v-else class="table-responsive">
        <div class="table table-hover">
          <thead>
            <th>#</th>
            <th>Term</th>
            <th>Files</th>
          </thead>
          <tbody>
            <tr v-for="(file,index) in files" :key="index">
              <td>{{index+1}}</td>
              <td>{{file.term}}</td>
              <td class="w-100">
                  <div 
                  class="course-files border-bottom"
                    v-for="(course,ind) in file.courses" 
                    :key="ind">
                    <div>{{course.course}}</div>
                    <div class="exams">
                      <div 
                        v-for="(exam, indd) in course.exams"
                        :key="indd"
                      >
                      <a  
                        target="_blank" 
                        rel="noopener noreferrer"
                        :href="url.replace(/TERM/, file.term).replace(/FILE_LINK/, exam.link)">
                        {{exam.name}}
                        </a> 
                      </div>
                    </div>
                  </div>  
              </td>
            </tr>
          </tbody>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      files:[],
      loading: true,
      url: 'https://mathfiles.kfupm.edu.sa/data/files/courseFilesData/TERM/FILE_LINK'
    }
  },
  mounted(){
    this.loading = true
    axios.get('/data/files/courseFiles/course_files.json')
    .then(response=>{
      this.loading = false
      const tempFiles = response.data
      this.files=tempFiles.sort((a,b)=>(parseInt(a.term)<=parseInt(b.term))? 1: -1)
      
    })
  }
}
</script>

<style>
.course-files {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
}

.exams {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 2px;
}
</style>
