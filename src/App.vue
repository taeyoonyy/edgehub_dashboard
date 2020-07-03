<template>
  <div id="app">
    <div class="logo">
      <img src="../static/images/common/group-24.svg" alt="EdgeHub" />
      <p>DASHBOARD</p>
      <div class="lsLogo">
        <img src="../static/images/common/ls-ci.svg" alt="Lsis" />
      </div>
    </div>

    <router-link to="/device">DEVICE MONITORING</router-link>&nbsp;|&nbsp;
    <router-link to="/tag">TAG MONITORING</router-link>&nbsp;|&nbsp;
    <router-link to="/event">EVENT</router-link>&nbsp;|&nbsp;
    <router-link to="/alarm">ALARM</router-link>
    <div class="divider"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
