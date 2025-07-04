import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api/v1'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const jobsApi = {
  getJobs: (params = {}) => apiClient.get('/jobs', { params }),
  getJob: (id: number) => apiClient.get(`/jobs/${id}`),
  createJob: (data: any) => apiClient.post('/jobs', data),
  updateJob: (id: number, data: any) => apiClient.put(`/jobs/${id}`, data),
  deleteJob: (id: number) => apiClient.delete(`/jobs/${id}`),
  searchJobs: (data: any) => apiClient.post('/jobs/search', data),
}

export const applicationsApi = {
  getApplications: (params = {}) => apiClient.get('/applications', { params }),
  getApplication: (id: number) => apiClient.get(`/applications/${id}`),
  createApplication: (data: any) => apiClient.post('/applications', data),
  updateApplication: (id: number, data: any) => apiClient.put(`/applications/${id}`, data),
  deleteApplication: (id: number) => apiClient.delete(`/applications/${id}`),
  submitApplication: (data: any) => apiClient.post('/applications/submit', data),
}

export const authApi = {
  login: (data: any) => apiClient.post('/auth/login', data),
  register: (data: any) => apiClient.post('/auth/register', data),
  logout: () => apiClient.post('/auth/logout'),
  getCurrentUser: () => apiClient.get('/auth/me'),
}

export default apiClient