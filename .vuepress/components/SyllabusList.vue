<template>
  <div>
    <h4>List</h4>
    <div>
       <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr >
            <th scope="col" class="w-10">#</th>
            <th scope="col" class="w-10">Course</th>
            <th scope="col" class="w-30">Title</th>
            <th scope="col" class="w-50">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list,index) in list" :key="index">
            <th scope="row" class="w-10">{{index+1}}</th>
            <td class="w-10" >{{list.course}}</td>
            <td class="w-30" >{{list.title}}</td>
            <td class="w-50" >
              <a 
                :href="url+'/'+list.term+'/'+list.course+'.pdf'" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="mt-1 font-medium">{{list.course+'.pdf'}}</a> 
              </td>
           
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data(){
    return {
      url: `https://mathfiles.kfupm.edu.sa/data/files/syllabusData`
    }
  }

}
</script>

<style>
</style>
