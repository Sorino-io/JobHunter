import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { jobsApi, applicationsApi } from '../api/client'

export const useJobStore = defineStore('jobs', () => {
  const jobs = ref([])
  const loading = ref(false)
  const error = ref(null)

  const totalJobs = computed(() => jobs.value.length)
  const activeJobs = computed(() => jobs.value.filter(job => job.status === 'active'))

  const fetchJobs = async (params = {}) => {
    loading.value = true
    error.value = null
    try {
      const response = await jobsApi.getJobs(params)
      jobs.value = response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const searchJobs = async (searchData) => {
    loading.value = true
    error.value = null
    try {
      const response = await jobsApi.searchJobs(searchData)
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const addJob = async (jobData) => {
    try {
      const response = await jobsApi.createJob(jobData)
      jobs.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    jobs,
    loading,
    error,
    totalJobs,
    activeJobs,
    fetchJobs,
    searchJobs,
    addJob
  }
})

export const useApplicationStore = defineStore('applications', () => {
  const applications = ref([])
  const loading = ref(false)
  const error = ref(null)

  const totalApplications = computed(() => applications.value.length)
  const submittedApplications = computed(() => 
    applications.value.filter(app => app.status === 'submitted')
  )

  const fetchApplications = async (params = {}) => {
    loading.value = true
    error.value = null
    try {
      const response = await applicationsApi.getApplications(params)
      applications.value = response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const submitApplication = async (applicationData) => {
    loading.value = true
    error.value = null
    try {
      const response = await applicationsApi.submitApplication(applicationData)
      await fetchApplications() // Refresh the list
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    applications,
    loading,
    error,
    totalApplications,
    submittedApplications,
    fetchApplications,
    submitApplication
  }
})