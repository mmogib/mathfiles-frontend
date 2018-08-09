---
sidebarDepth: 0
---

### Course Files

<maintenance v-if="under_maintenance"/>
<course-files v-else/>

<script>
export default {
  data() {
    return {
      under_maintenance: false,
    }
  },
  beforeMount(){
    const today= new Date()
    const start = new Date(`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()} 00:00:00`)
    const end = new Date(`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()} 01:00:00`)
    const now = Date.now()
    if (now>=start && now<end){
      this.under_maintenance=true
    }
    else{
      this.under_maintenance=false
    }
  }
}
</script>
