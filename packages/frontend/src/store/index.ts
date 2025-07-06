import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { jobsApi, applicationsApi } from "../api/client";
import type { Job, Application } from "../types";

export const useJobStore = defineStore("jobs", () => {
  const jobs = ref<Job[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const totalJobs = computed(() => jobs.value.length);
  const activeJobs = computed(() =>
    jobs.value.filter((job) => job.status === "active")
  );

  const fetchJobs = async (params = {}) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await jobsApi.getJobs(params);
      jobs.value = response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "An error occurred";
    } finally {
      loading.value = false;
    }
  };

  const searchJobs = async (searchData: any) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await jobsApi.searchJobs(searchData);
      return response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "An error occurred";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const addJob = async (jobData: Partial<Job>) => {
    try {
      const response = await jobsApi.createJob(jobData);
      jobs.value.push(response.data);
      return response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "An error occurred";
      throw err;
    }
  };

  return {
    jobs,
    loading,
    error,
    totalJobs,
    activeJobs,
    fetchJobs,
    searchJobs,
    addJob,
  };
});

export const useApplicationStore = defineStore("applications", () => {
  const applications = ref<Application[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const totalApplications = computed(() => applications.value.length);
  const submittedApplications = computed(() =>
    applications.value.filter((app) => app.status === "submitted")
  );

  const fetchApplications = async (params = {}) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await applicationsApi.getApplications(params);
      applications.value = response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "An error occurred";
    } finally {
      loading.value = false;
    }
  };

  const submitApplication = async (applicationData: Partial<Application>) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await applicationsApi.submitApplication(applicationData);
      await fetchApplications(); // Refresh the list
      return response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "An error occurred";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    applications,
    loading,
    error,
    totalApplications,
    submittedApplications,
    fetchApplications,
    submitApplication,
  };
});
