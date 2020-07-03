import Vue from 'vue';
import VueRouter from 'vue-router';
import DeviceMonitoringView from '../view/DeviceMonitoringView';
import TagMonitoringView from '../view/TagMonitoringView';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/devicemonitoring',
      component: DeviceMonitoringView,
    },
    {
      path: '/tagmonitoring',
      component: TagMonitoringView,
    },
  ],
});

export default router;
