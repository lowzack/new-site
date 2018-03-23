import 'bootstrap';
import './scss/main.scss';
import Vue from 'vue';
import App from './App.vue';

if(document.getElementById('app') === null) {
  const appDiv = document.createElement('div')
  appDiv.id = 'app';
  document.body.appendChild(appDiv);
}

document.body.style.padding = 0;
document.body.style.margin = 0;

new Vue({
  el: '#app',
  render: h => h(App)
})
