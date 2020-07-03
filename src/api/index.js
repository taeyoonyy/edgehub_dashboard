import axios from 'axios';

let instance = axios.create();

// const instance = axios.create({
//   // baseURL: 'http://192.168.43.177:8888',
//   baseURL: process.env.VUE_APP_API_LOCATION,
// });

instance.defaults.baseURL = process.env.VUE_APP_API_LOCATION;

if (instance.defaults.baseURL === undefined) {
  instance = axios.create({
    baseURL: 'http://localhost:8888',
  });
}

function getAllDeviceList() {
  return instance.get('alldevicelist');
}

function getAllTagInformation() {
  return instance.get('alltaginformation');
}

export { getAllDeviceList, getAllTagInformation };
