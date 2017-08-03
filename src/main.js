import Vue from 'vue'
import App from './App.vue'

if(document.getElementById('app') === undefined) {
  const appDiv = document.createElement('div')
  appDiv.id = 'app';
  document.appendChild(appDiv);
}

document.body.style.padding = 0;
document.body.style.margin = 0;

new Vue({
  el: '#app',
  render: h => h(App)
})
