<template>
  <div>
    <h1>TAG MONITORING</h1>
    <form @submit.prevent="getTagList">
      <!-- <button type="submit">TAG LIST</button> -->
      <p>Tag count: {{ deviceInformation.length }}</p>
      <ul class="tagUl">
        <li v-for="tag in this.deviceInformation" :key="tag.index" :name="tag.tagUrl">
          <input type="radio" :id="tag.tagUrl" :value="tag.tagUrl" v-model="checkedTag" />
          Group: {{ tag.group }} / Device: {{ tag.device }} / Tag: {{ tag.tag }}
        </li>
      </ul>
    </form>
    <div class="tagGraph">
      <p v-if="checkedTag">Graph Type</p>
      <b-dropdown v-if="checkedTag" id="dropdown-1" class="m-md-2" :text="graphType">
        <b-dropdown-item @click="selectedDropdownItem('line')">Line</b-dropdown-item>
        <b-dropdown-item @click="selectedDropdownItem('bar')">Bar</b-dropdown-item>
      </b-dropdown>
      <canvas id="lineChart"></canvas>
    </div>
  </div>
</template>

<script>
import { getAllTagInformation } from "../api/index";
import Chart from "chart.js";
export default {
  data() {
    return {
      deviceInformation: [],
      chartData: [],
      chartObject: 0,
      updateInterval: 1000,
      checkedTag: "",
      selectedGraph: "",
      refreshInterval: "",
      graphList: [
        { key: "line", text: "Line" },
        { key: "bar", text: "Bar" }
      ],
      fontSize: 20,
      graphType: "line"
    };
  },
  mounted() {
    console.log("mounted");
    this.getTagList();
  },
  watch: {
    checkedTag() {
      this.renderChart();
      clearInterval(this.refreshInterval);
      this.refreshInterval = setInterval(
        this.updateData,
        this.updateInterval,
        this.chartObject,
        this.checkedTag
      );
    },
    graphType() {
      this.renderChart();
      clearInterval(this.refreshInterval);
      this.refreshInterval = setInterval(
        this.updateData,
        this.updateInterval,
        this.chartObject,
        this.checkedTag
      );

      // console.log("current", this.chartObject.config.type);
      // console.log(this.chartObject);
      // this.chartObject.config.type = this.graphType;
      // console.log("next", this.chartObject.config.type);
      // this.chartObject.update();
      // console.log(this.chartObject);
    }
    // chartData(beData, NextData) {
    //   console.log("be", beData);
    //   console.log("next", NextData);
    // },
  },
  methods: {
    // get tag list from backend
    async getTagList() {
      const response = await getAllTagInformation();
      this.deviceInformation = response.data;
    },
    // render chart once
    renderChart() {
      var ctx = document.getElementById("lineChart").getContext("2d");
      this.chartObject = new Chart(ctx, {
        type: this.graphType,
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          datasets: [
            {
              label: this.checkedTag,
              backgroundColor: "rgb(5, 99, 132)",
              borderColor: "rgb(5, 99, 132)",
              data: this.chartData
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            labels: {
              fontSize: this.fontSize
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  stepSize: 2,
                  fontSize: this.fontSize
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: this.fontSize
                }
              }
            ]
          }
        }
      });
      console.log("####this.chartObject:", this.chartObject);
      console.log("current", this.chartObject.config.type);
    },
    // update data with updateInterval
    async updateData(_chart, checkedTag) {
      const response = await getAllTagInformation();
      for (var i of response.data) {
        if (i.tagUrl === checkedTag) {
          _chart.data.datasets[0].data = i.data;
        }
      }
      _chart.update();
    },
    selectedDropdownItem(type) {
      this.graphType = type;
      console.log(type);
    }
  }
};
</script>

<style></style>
