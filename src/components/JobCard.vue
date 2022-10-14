<template>
  <div class="job-card">
    <h1 class="job-title">{{job.jobTitle}}</h1>
    <p class="description" v-html="formatDesc(job.jobDescription)"></p>
    <div class="view-more-cta">
        <div>&nbsp;</div>
        <button class="see-details" @click="viewJob(job)">See details &nbsp;>> </button>
    </div>
  </div>
</template>

<script>
export default {
name:"JobCard",
props: {
    job: {type: Object, default: () => {}}
},

methods: {
  
  formatDesc(wordStr) {
    const jobDescText = wordStr?.split(' ');
    const firstFourty = jobDescText.splice(0, 40).join(' ') + '...'

    return firstFourty
  },

  viewJob(job) {
    this.$store.commit('SET_SELECTED_JOB', {})
    this.$nextTick(() => {
      this.$router.push(`/job-details/${job._id}`)
    })
  }
 }
}

</script>

<style>
.job-card { position: relative; background: hsl(228, 28%, 20%); color:hsl(229, 38%, 76%); border-radius: 5px; padding: 20px 20px 10px 20px; border-top: 2px solid transparent; }
.job-card:nth-of-type(5n + 1) { border-image: linear-gradient(90deg, rgb(53, 28, 240) 0%, rgba(73,224,233,0.9895308465182948) 35%, rgba(0,212,255,1) 100%);  border-image-slice: 1;}
.job-card:nth-of-type(5n + 2) { border-image: linear-gradient(90deg, rgb(126, 0, 107) 0%, rgba(145, 143, 17, 0.99) 35%, rgb(230, 74, 27) 100%);  border-image-slice: 1;}
.job-card:nth-of-type(5n + 3) { border-image: linear-gradient(90deg, rgb(109, 28, 240) 0%, rgba(73, 233, 84, 0.99) 35%, rgb(76, 10, 198) 100%);  border-image-slice: 1;}
.job-card:nth-of-type(5n + 4) { border-image: linear-gradient(90deg, rgb(240, 28, 28) 0%, rgba(233, 132, 73, 0.99) 35%, rgb(36, 127, 141) 100%);  border-image-slice: 1;}
.job-card:nth-of-type(5n + 5) { border-image: linear-gradient(90deg, rgb(28, 240, 113) 0%, rgba(73, 134, 233, 0.99) 35%, rgb(244, 34, 205) 100%);  border-image-slice: 1;}
.job-card:hover::after, .job-card:hover::before{ transform: scale(1, 1);}
.job-card::after, .job-card::before{ content: ''; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; transition: all 0.5s;}
.job-card::after{ border-right: 1px solid transparent; border-left: 1px solid transparent; border-image: linear-gradient(90deg, rgb(53, 28, 240) 0%, rgba(73,224,233,0.9895308465182948) 35%, rgba(0,212,255,1) 100%);  border-image-slice: 1; transform: scale(1, 0);}
.job-card::before{ border-bottom: 1px solid transparent; border-image: linear-gradient(90deg, rgb(240, 28, 28) 0%, rgba(233, 132, 73, 0.99) 35%, rgb(36, 127, 141) 100%);  border-image-slice: 1; transform: scale(0, 1);}

.job-card .job-title { font-size: 24px; font-weight: 600 !important; padding-bottom: 6px; color: #fff;  }
.job-card .description { font-size: 16px; }
.job-card .view-more-cta { display: flex; align-items: center; justify-content: space-between; padding: 20px 0 8px 0; } 
.job-card .view-more-cta .see-details { all: unset; z-index: 9; background: hsl(228, 34%, 66%); color: #fff; cursor: pointer; border-radius: 5px; padding:7px 13px; }
.readmore { color: rgb(0, 195, 0); }


/* MEDIA QUERIES */
@media (max-width: 767px) {
    .job-card .job-title { font-size: 18px; }
    .job-card .description { font-size: 14px; }
    .job-card .view-more-cta .see-details { font-size: 14px; }
}
@media (max-width: 480px) {
    .job-card { padding: 10px 10px 6px 10px; }
}
</style>