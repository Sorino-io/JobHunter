<template>
  <div class="dashboard">
    <h2 class="text-3xl font-bold mb-6">Dashboard</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Total Jobs</h3>
        <p class="text-3xl font-bold text-blue-600">{{ stats.totalJobs }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Applications Sent</h3>
        <p class="text-3xl font-bold text-green-600">{{ stats.applicationsSent }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Response Rate</h3>
        <p class="text-3xl font-bold text-purple-600">{{ stats.responseRate }}%</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold mb-4">Recent Activity</h3>
      <div class="space-y-3">
        <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center justify-between p-3 bg-gray-50 rounded">
          <span>{{ activity.description }}</span>
          <span class="text-sm text-gray-500">{{ activity.timestamp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref({
  totalJobs: 0,
  applicationsSent: 0,
  responseRate: 0
})

const recentActivity = ref([
  { id: 1, description: 'Applied to Software Engineer at TechCorp', timestamp: '2 hours ago' },
  { id: 2, description: 'Resume tailored for Data Analyst position', timestamp: '4 hours ago' },
  { id: 3, description: 'New job found: Frontend Developer at StartupXYZ', timestamp: '6 hours ago' }
])

onMounted(async () => {
  // TODO: Fetch actual stats from API
  stats.value = {
    totalJobs: 47,
    applicationsSent: 12,
    responseRate: 25
  }
})
</script>