<template>
  <div>
    <h3>DEVICE MONITORING</h3>
    <form @submit.prevent="submitForm">
      <!-- <button type="submit">GET DEVICE LIST</button> -->
      <p>Device count: {{ deviceInformation.length }}</p>
      <ul class="deviceUl">
        <li v-for="device in this.deviceInformation" :key="device.index">
          <input type="radio" v-model="checkedDevice" />
          {{ device.category }} / {{ device.group }} / {{ device.device }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { getAllDeviceList } from "../api/index";
export default {
  data() {
    return {
      deviceInformation: [],
      checkedDevice: ""
    };
  },
  mounted() {
    this.submitForm();
  },
  methods: {
    async submitForm() {
      const response = await getAllDeviceList();
      this.deviceInformation = response.data;
    }
  }
};
</script>

<style></style>
