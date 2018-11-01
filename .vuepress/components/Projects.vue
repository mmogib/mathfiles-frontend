<template>
  <div>
    <div class="text-center" v-if="loading">Loading please ... </div>
    <div  v-else v-for="(project, index) in projects" :key="project.code">
      <div  class="card-deck mb-2">
      <div 
      class="card">
        <div class="card-body">
          <h5 class="card-title">
          {{project.ref}}: <span class="font-italic">{{project.title}}</span></h5>
          
          <p class="card-text text-right text-secondary">
            <span v-if="!project.ci.length">---</span>
            <span
            v-else
            v-for="(c,ind) in project.ci"
            :key="index+'-'+ind">
            {{c.name}}({{c.type}}), 
            </span>
            
          </p>
          <p class="card-text float-left">
            Sponsored by: {{project.sponsor}}, 
          </p>
        </div>
        <div class="card-footer mt-3"  >          
            <div class="text-left">
            Sarts: {{project.start_month}} - {{project.start_year}} </br>
            </div>
            <div class="text-right">
            Ends: {{project.end_month}} - {{project.end_year}}
            </div>
            
          </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'projects',
  data () {
    return {
      projects: [],
      loading: false
    }
  },
  async created () {
    this.loading = true
    try {
      const res = await axios.get('/data/files/projects/projects.json')
      this.projects = res.data.sort((a,b)=> parseInt(a.start_year) <= parseInt(a.end_year)? -1:1)
      
    } catch (error) {
      this.errors = error
    } finally {
      this.loading = false
    }
  }

}
</script>

<style>
</style>
