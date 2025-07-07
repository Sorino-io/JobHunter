<template>
  <div class="dashboard">
    <div class="container">
      <h2 class="page-title">Dashboard</h2>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h3 class="stat-title">Total Applications</h3>
          <p class="stat-number stat-blue">{{ stats.totalApplications }}</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-title">Pending Responses</h3>
          <p class="stat-number stat-yellow">{{ stats.pendingResponses }}</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-title">Interviews Scheduled</h3>
          <p class="stat-number stat-green">{{ stats.interviewsScheduled }}</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-title">Offers Received</h3>
          <p class="stat-number stat-purple">{{ stats.offersReceived }}</p>
        </div>
      </div>

      <div class="content-grid">
        <div class="card">
          <h3 class="card-title">Recent Applications</h3>
          <div class="applications-list">
            <div v-for="application in recentApplications" :key="application.id" class="application-item">
              <div class="application-info">
                <h4 class="application-title">{{ application.position }}</h4>
                <p class="application-company">{{ application.company }}</p>
              </div>
              <span class="application-status" :class="getStatusClass(application.status)">
                {{ application.status }}
              </span>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Quick Actions</h3>
          <div class="actions-list">
            <button class="action-btn">
              Add New Application
            </button>
            <button class="action-btn">
              Search Jobs
            </button>
            <button class="action-btn">
              Update Resume
            </button>
            <button class="action-btn">
              Schedule Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref({
  totalApplications: 0,
  pendingResponses: 0,
  interviewsScheduled: 0,
  offersReceived: 0
})

const recentApplications = ref([
  { id: 1, position: 'Software Engineer', company: 'TechCorp', status: 'Applied' },
  { id: 2, position: 'Data Analyst', company: 'DataInc', status: 'Interview' },
  { id: 3, position: 'Frontend Developer', company: 'WebSolutions', status: 'Offer' }
])

const getStatusClass = (status: string) => {
  const statusMap: { [key: string]: string } = {
    'Applied': 'status-applied',
    'Pending': 'status-pending', 
    'Interview': 'status-interview',
    'Rejected': 'status-rejected',
    'Offer': 'status-interview' // Using green for offers
  }
  return statusMap[status] || 'status-applied'
}

onMounted(async () => {
  // TODO: Fetch actual stats from API
  stats.value = {
    totalApplications: 47,
    pendingResponses: 12,
    interviewsScheduled: 8,
    offersReceived: 3
  }
})
</script>

<style scoped>
.dashboard {
  padding: 0;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1f2937;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.stat-blue { color: #2563eb; }
.stat-yellow { color: #f59e0b; }
.stat-green { color: #10b981; }
.stat-purple { color: #8b5cf6; }

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #1f2937;
}

.applications-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.application-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}

.application-info {
  flex: 1;
}

.application-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: #1f2937;
}

.application-company {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.application-status {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-applied {
  background-color: #dbeafe;
  color: #1e40af;
}

.status-pending {
  background-color: #fef3c7;
  color: #92400e;
}

.status-interview {
  background-color: #d1fae5;
  color: #065f46;
}

.status-rejected {
  background-color: #fee2e2;
  color: #991b1b;
}

.actions-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-btn {
  padding: 0.75rem 1rem;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.action-btn:hover {
  background-color: #e5e7eb;
  border-color: #9ca3af;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>