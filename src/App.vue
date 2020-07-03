<template>
  <div id="app">
    <h1>EDGEHUB DASHBOARD</h1>
    <router-link to="/devicemonitoring">DEVICE MONITORING</router-link> |
    <router-link to="/tagmonitoring">TAG MONITORING</router-link>
    <div class="divider"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
