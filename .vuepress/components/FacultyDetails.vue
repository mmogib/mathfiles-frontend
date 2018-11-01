<template>
<div>
  <div class="row" v-if="loading">
    <div class="col" >
          Loading please wait... 
    </div>
  </div> 
  <div v-else> 
    <div class="row">
      <div class="col">
         <div class="text-right" >
          <button 
            class="btn btn-outline px-5 mb-3" 
            @click="$emit('hidePublication')">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>  
    </div>    
    <div class="row"> 
      <div class="col">
        <div class="card text-center" >
        <div class="card-header" :style="{'background-color': cardColor()}">
          <ul class="nav nav-pills card-header-pills float-right">
            <li class="nav-item ">
              <a 
                :class="{'nav-link': true, 'active': active==faculty.username+'publications'}" 
                :href="'#'+faculty.username+'publications'"
                @click="active=faculty.username+'publications'"
                > Publications</a>
            </li>
            
            
          </ul>
        </div>
        <div class="card-body card-container">
          <div class="basic_info">
          <h5 class="card-title">{{faculty.title}} {{faculty.fullname}}</h5>
          <img 
            style="max-width: 150px"
          :src="imgUrl+'/'+faculty.username+'.jpg'" 
          class="img-fluid" alt="Responsive image">
              <p class="font-medium">
                  <span>Office:</span> 
                  {{faculty.officebldg}}-{{faculty.officeroom}} 
                  |
                  <span>Tel:</span> 
                  {{faculty.officetel}} 
                  <br />
                  <span>Mail:</span> 
                  KFUPM Box # {{faculty.postbox}} 
                </p>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            :href="faculty.website" 
            class="btn btn-primary mb-3">Go Perosonal Website </a>
            <faculty-research-interests
                        :researchinterests="faculty.researchinterests" />
            </div> <!-- end of basic info -->
            <div  class="more_info"> 
              <schedule 
            v-if="show.schedule"
            :faculty="faculty"/>
            <faculty-office-hours  
            v-if="show.oh"
            :officehours="office_hours"/>
              </div> <!-- end of main data -->
        </div>
      </div>
      </div>
    </div>
   
    
 <div class="row">
      <div class="col">
      
      <faculty-course-files 
      :username="faculty.username" />
      </div>
 </div>
    
    <div class="row">
      <div class="col">
        <publications-list
            :list="getPublications()"
            :title="faculty.username+'publications'"
            />
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['faculty'],
  data(){
    return {
      publications: [],
      schedule: [],
      office_hours: [],
      imgUrl: 'https://mathfiles.kfupm.edu.sa/data/files/photos',
      loading: true,
      active: null,
      colors: ['FCFAF1'],//,'F9F5E3','F6F1D6','F3ECC8','F0E8BB'
      show: {
        schedule: true,
        oh: true
      }
    }
  },
  methods: {
    cardColor(){
      return "#"+this.colors[Math.floor(Math.random()*this.colors.length)]
    },
    getPublications(){
     
      return this.publications
    }
  },
  mounted(){
    this.loading=true
    this.schedule = this.faculty.schedule
    this.office_hours = this.faculty.officehours
    axios.get(`/data/files/faculty/publications/${this.faculty.username}.json`).then(response=>{
      this.publications=response.data
      this.loading=false
    })
    this.active=`${this.faculty.username}publications`
  }

}
</script>

<style scoped>
.card-container {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 'left_info main_data';
}

.basic_info {
  grid-area: left_info;
  border-right: 1px solid #f3ecc8;
}
.more_info {
  grid-area: main_data;
  padding-left: 2px;
}

@media (max-width: 700px) {
  .card-container {
    grid-template-areas:
      'left_info'
      'main_data';
  }
  .basic_info {
    border-right: 0px;
  }
}
</style>
