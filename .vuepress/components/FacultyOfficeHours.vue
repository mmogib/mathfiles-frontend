<template>
  <div>
    <h4>Office Hours</h4>
    <p v-if="!officehours">...</p>
    <div v-else class="table-responsive ">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sunday</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <span v-for="(sn,index) in officehours.sun" :key="`s${index}`">{{sn}}</span>
            </th>
            <th>
              <span v-for="(sn,index) in officehours.mon" :key="`m${index}`">{{sn}}</span>
            </th>
            <th>
              <span v-for="(sn,index) in officehours.tue" :key="`t${index}`">{{sn}}</span>
            </th>
            <th>
              <span v-for="(sn,index) in officehours.wed" :key="`w${index}`">{{sn}}</span>
            </th>
            <th>
              <span v-for="(sn,index) in officehours.thu" :key="`r${index}`">{{sn}}</span>
            </th>
          </tr>
        </tbody>
        <caption><span class="font-weight-bold">Notes: </span> {{officehours.note}}</caption>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['officehours']
}
</script>

<style>
</style>
