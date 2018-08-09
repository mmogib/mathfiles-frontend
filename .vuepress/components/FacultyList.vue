<template>
  <div>
  
  <div v-if="loading">Loading please wait... </div>
  <div v-else >
    <transition leave-active-class="animated fadeOut" enter-active-class="animated bounce">
    <div v-if="selectedFaculty">
      <faculty-details 
      @hidePublication="selectedFaculty=null"
      :faculty="selectedFaculty"/>
      </div>
    </transition>  
    <div v-if="!selectedFaculty">
    <faculty-filter 
    @filter="filter"
    @filterByKey="filterByKey"/> 
    <div class="table-responsive-xs">
      <table class="table table-hover">
        <tbody>
          <tr v-for="(faculty,index) in filtered" :key="index">
            <th >{{index+1}}</th>
            <td class="w-100">
              <faculty-item 
                :faculty="faculty"
                @setSelectedFaculty="setSelectedFaculty"
                />
              </td>
          </tr>
        </tbody>
      </table>
    </div>
 
    </div> 
      
    </div>

 </div>

 
</template>

<script>
import axios from 'axios'
export default {
  name: "PageIndex",
  data() {
    return {
      msg: 'Random Message',
      users:[],
      filtered: [],
      faculty: null,
      loading: true,
      selectedFaculty: null
    }
  },
  methods: {
    setSelectedFaculty(faculty){
      this.selectedFaculty=faculty
    },
    show(user) {
      this.faculty =user
    },
    goBack(){
      this.faculty=null
    },
    doNothin(){
      return false
    },
    filterByKey(keyword){
      this.filtered =this.filtered.filter(value=>{
           return ((value.fullname.toLowerCase()).includes(keyword.toLowerCase()) || 
              (value.rank.toLowerCase()).includes(keyword.toLowerCase())) 
              
        }) 
    },
    filter(rank) {
      if (rank=='All'){
        this.filtered=this.users
      }
      else{
      this.filtered =this.users.filter(value=>{
          return (value.rank===rank)
        }) 
      }
    }
  },
  beforeMount(){
    this.loading=true
    //https://reqres.in/api/users?pgae=2
    axios.get('/data/files/faculty/faculty.json').then(data=>{
      this.users=data.data
      this.filtered=this.users
      this.loading=false
    })
  }
}
</script>
