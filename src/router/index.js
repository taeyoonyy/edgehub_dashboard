import Vue from 'vue';
import VueRouter from 'vue-router';
import DeviceView from '../view/DeviceView';
import TagView from '../view/TagView';
import AlarmView from '../view/AlarmView';
import EventView from '../view/EventView';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/device',
      component: DeviceView,
    },
    {
      path: '/tag',
      component: TagView,
    },
    {
      path: '/alarm',
      component: AlarmView,
    },
    {
      path: '/event',
      component: EventView,
    },
  ],
});

export default router;
