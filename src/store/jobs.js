import Vue from "vue";
import jobService from "../services/jobs";
const assets = {
    state: {
        namspaced: true,
        jobs: null,
        selectedJob: {},
    },
    mutations: {
        SET_JOBS: (state, jobs) => (state.jobs = jobs),
        SET_SELECTED_JOB: (state, selectedJob) =>
            (state.selectedJob = selectedJob),
    },
    actions: {
        fetchJobs: async ({ commit }, {...queryParam}) => {
            commit("SET_LOADING", true, { root: true });
            try {
                const response = await jobService.getJobs(queryParam);
                commit("SET_JOBS", response.data);
            } catch (err) {
                console.log(err);
                Vue.$toast.error(err.message);
            } finally {
                commit("SET_LOADING", false, { root: false });
            }
        },
        fetchSingleJob: async ({ commit }, jobId) => {
            commit("SET_LOADING", true, { root: true });
            try {
                const response = await jobService.selectJob(jobId);
                console.log(response.data)
                commit("SET_SELECTED_JOB", response.data);
                return response.data
            } catch (err) {
                console.log(err);
                Vue.$toast.error(err.message);
            } finally {
                commit("SET_LOADING", false, { root: true });
            }
        },
    },
    getters: {
        allJobs: (state) => state.jobs,
        selectedJob: (state) => state.selectedJob
    },
};
export default assets;






