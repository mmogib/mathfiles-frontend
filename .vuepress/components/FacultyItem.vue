<template>
  
  <div class="row">
    <div class="col">
      <span class="font-weight-bold">
      {{faculty.title}} {{faculty.fullname}}
      </span>, 
      <span class="text-muted font-small">{{faculty.rank}}</span>
        <div>
        <div class="float-right" >
        <span v-if="faculty.website">                
        <a 
        :href="faculty.website" 
        target="_blank" 
        rel="noopener noreferrer" 

        class="mt-1 font-medium">Website</a> 
        |
        </span>
       <a 
        href="#"
        class="font-medium"
        data-toggle="tooltip" 
        data-placement="top" 
        :title="faculty.username +' at kfupm.edu.sa'"
        @click.prevent="showEmail(faculty.username)">
        Email
       </a>
         <div class="font-small" v-if="selectedEmail[faculty.username]"> 
         <span>{{selectedEmail[faculty.username]}}</span>
         </div>
        </div>
        </div>
       <blockquote class="font-medium">
        <span>Office:</span> 
        {{faculty.officebldg}}-{{faculty.officeroom}} 
        |
        <span>Tel:</span> 
        {{faculty.officetel}} 
        <br />
        <span>Mail:</span> 
        KFUPM Box # {{faculty.postbox}} 
       </blockquote>
    </div>  
    <div class="col border-left">
     <faculty-research-interests
     :researchinterests="faculty.researchinterests"
     :truncate="true" />
    <div class="text-right font-medium">
      <button 
        type="button" 
        class="btn btn-outline-dark"
        @click="setSelectedFaculty(faculty)"
        >
        More <i class="fas fa-arrow-right"></i>
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faculty_item',
  props: ['faculty'],
  data(){
    return {
      selectedEmail: {}
    }
  },
  methods: {
    showEmail(username){
      this.selectedEmail=null
      this.selectedEmail={}
      this.selectedEmail[username]= `${username} at kfupm.edu.sa`
      setTimeout(()=>{
        this.selectedEmail={}
      },2000)
    },
    setSelectedFaculty(faculty){
      this.$emit('setSelectedFaculty', faculty)
    }
  }

}
</script>

<style>
</style>
