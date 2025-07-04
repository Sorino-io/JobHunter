<template>
  <div class="job-card bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
    <div class="flex justify-between items-start mb-3">
      <h3 class="text-xl font-semibold text-gray-900">{{ job.title }}</h3>
      <span :class="statusClass" class="px-2 py-1 rounded-full text-xs font-medium">
        {{ job.status }}
      </span>
    </div>
    
    <div class="mb-3">
      <p class="text-lg text-gray-700 font-medium">{{ job.company }}</p>
      <p class="text-sm text-gray-500" v-if="job.location">{{ job.location }}</p>
    </div>
    
    <p class="text-gray-600 mb-4 line-clamp-3">{{ job.description }}</p>
    
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <span class="text-sm text-gray-500">{{ formatDate(job.posted_date) }}</span>
        <span class="text-sm text-blue-600 font-medium">{{ job.source }}</span>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="$emit('view', job)" 
          class="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
        >
          View
        </button>
        <button 
          @click="$emit('apply', job)" 
          class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Job {
  id: number
  title: string
  company: string
  location?: string
  description: string
  status: string
  source: string
  posted_date?: string
}

const props = defineProps<{
  job: Job
}>()

const emit = defineEmits<{
  view: [job: Job]
  apply: [job: Job]
}>()

const statusClass = computed(() => {
  switch (props.job.status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'applied':
      return 'bg-blue-100 text-blue-800'
    case 'closed':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
})

const formatDate = (date?: string) => {
  if (!date) return 'Unknown'
  return new Date(date).toLocaleDateString()
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>