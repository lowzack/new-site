import 'bootstrap';
import './scss/main.scss';
import Vue from 'vue';
import App from './App.vue';

function startApp() {
  // Set up META tags for device viewport (responsiveness)
  const firstMeta = document.getElementsByTagName('meta')[0];
  const viewportMeta = document.createElement('meta');
  viewportMeta.name = "viewport";
  viewportMeta.content = "width=device-width, initial-scale=1, shrink-to-fit=no";
  firstMeta.parentNode.insertBefore(viewportMeta, firstMeta.nextSibling);

  // Ensure there is a <div> to attatch our app to
  if(document.getElementById('app') === null) {
    const appDiv = document.createElement('div')
    appDiv.id = 'app';
    document.body.appendChild(appDiv);
  }

  // Initialize app
  new Vue({
    el: '#app',
    render: h => h(App)
  });
}

window.addEventListener('load', startApp);
