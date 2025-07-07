<script setup lang="ts">
// Router view will handle the page rendering
</script>

<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1 class="title">JobHunter</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">Dashboard</router-link>
          <router-link to="/jobs" class="nav-link">Jobs</router-link>
          <router-link to="/applications" class="nav-link">Applications</router-link>
          <router-link to="/settings" class="nav-link">Settings</router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.header {
  background-color: #2563eb;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.main {
  min-height: calc(100vh - 100px);
  padding: 2rem 0;
}
</style>
