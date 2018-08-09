<template>
  <div>
     <h6 class="border-bottom">Research Interests:</h6>
      <span v-if="researchinterests.length==0">...</span>
      <span v-else 
        :class="{'font-medium d-inline-block': true, 'text-truncate': truncate}" style="max-width: 300px;">
      <span 
        v-for="(interest,InterIndex) in researchinterests" 
        :key="InterIndex">{{interest}} 
      <span v-show="researchinterests.length>(InterIndex+1)">, </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['researchinterests', 'truncate']

}
</script>

<style>
</style>
