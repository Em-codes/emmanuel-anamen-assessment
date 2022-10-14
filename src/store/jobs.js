import Vue from "vue";
import jobService from "../services/jobs";
const assets = {
    state: {
        namspaced: true,
        jobs: null,
        selectedJob: {},
        queryParam: {
            keyword: "",
            resultPerPage: 15,
            page: 1,
        }

    },
    mutations: {
        SET_JOBS: (state, jobs) => (state.jobs = jobs),
        SET_SELECTED_JOB: (state, selectedJob) =>
            (state.selectedJob = selectedJob),
        SET_KEYWORD: (state, keyword) =>
            (state.queryParam.keyword = keyword),
        SET_RESULTPERPAGE: (state, keyword) =>
            (state.queryParam.resultPerPage = keyword),
        SET_PAGE: (state, keyword) =>
            (state.queryParam.page = keyword),
    },
    actions: {
        fetchJobs: async ({ commit }, queryParams) => {
            commit("SET_LOADING", true, { root: true });
            try {
                const response = await jobService.getJobs(queryParams);
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
        selectedJob: (state) => state.selectedJob,
        queries: (state) => state.queryParam
    },
};
export default assets;






