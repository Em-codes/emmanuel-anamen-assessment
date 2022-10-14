<template>
  <JobLayout>
    <div>
      <div class="items-display">
          <h1 class="title">Job Details</h1>
          <div class="full-job-read">
            <h1 class="fr-job-title">{{job && job.jobTitle}}</h1>
            <p class="fr-job-description" v-html="job && job.jobDescription"></p>
            <a v-if="!loading && job" :href="job && job.jobUrl"><button  class="apply-now">Apply Now!</button></a>
          </div>
          
       </div>
    </div>
  </JobLayout>
</template>

<script>
import {mapGetters} from 'vuex'
import JobLayout from "../layout/job.vue";
export default {
  name: "JobDetailsPage",
  components: {
    JobLayout,
  },
  data() {
    return {
      jobId: this.$route.params.id,
    };
  },
     computed: {
    ...mapGetters({
      job: ["selectedJob"],
      loading:['loadingState']
    }),
     },
  async created() {
    await this.$store.dispatch('fetchSingleJob', this.jobId)
  }
};
</script>

<style scoped>
a { text-decoration: none;}
.full-job-read { margin-bottom: 40px; border-top:0.5px solid rgba(183, 183, 183, 0.355); border-radius: 6px; padding: 20px; box-shadow: 0px 134px 193px rgba(183, 183, 183, 0.07), 0px 16.7789px 24.1666px rgba(183, 183, 183, 0.035) }

.fr-job-title { color: #fff; padding-bottom: 10px; }
.fr-job-description { color:hsl(229, 38%, 76%); padding-bottom: 12px; line-height: 24px;}
.apply-now { all: unset; background: hsl(146, 68%, 55%); font-size: 20px; color: #fff; max-width: 250px; width: 100%; margin-top: 30px; text-align: center; cursor: pointer; border-radius: 5px; padding:12px 20px; }

/* MEDIA QUERIES */

@media (max-width: 767px) {
  .full-job-read { padding: 10px 10px 20px 10px; }
    .fr-job-title {font-size: 20px; }
    .fr-job-description { font-size: 16px; }
    .apply-now { font-size: 16px; }

}

@media (max-width: 480px) {
    .apply-now { max-width: 200px; }
}
</style>