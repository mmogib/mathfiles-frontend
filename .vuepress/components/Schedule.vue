<template>
  <div >
    <h4 id="Schedule" class="mt-3">Current Schedule ({{term}})</h4>
    <p v-if="schedule.length<=0">...</p>
    <div v-else class="table-responsive text-center ">
      <table class="table table-hover">
        <thead>
          <tr >
            <th scope="col"  class="w-5">#</th>
            <th scope="col" class="w-10">Course</th>
            <th scope="col" class="w-10">Section</th>
            <th scope="col" class="w-20">Activity</th>
            <th scope="col" class="w-20">Days</th>
            <th scope="col" class="w-25">Period</th>
            <th scope="col" class="w-10"> Class Loc</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course,index) in schedule" :key="index">
            <th scope="row" class="w-5">{{index+1}}</th>
            <td class="w-10" >{{course.course}}</td>
            <td class="w-10" >{{course.section}}</td>
            <td class="w-20" >{{course.type}}</td>
            <td class="w-20" >{{course.days}}</td>
            <td class="w-25" >
              {{course.start_hour}} {{course.start_ampm}}: {{course.start_minutes}}
              {{course.end_hour}} {{course.end_ampm}}: {{course.end_minutes}}
              
            </td>
            <td class="w-10" >{{course.place}}</td>
          
          </tr>
        </tbody>
      </table>
    </div>
  
  </div>
</template>

<script>
export default {
  props: ['faculty'],
  data (){
    return {
      schedule: [],
      term: ''
    }
  },
  mounted(){
    this.schedule= this.faculty.schedule
    this.term = (this.schedule.length>0)? this.schedule[0]['term']: '...'
  }
}
</script>

