import Vue from 'vue';

import App from './app.vue';

(async () => {
  new Vue({
    render: (h) => h(App)
  }).$mount('#app');
})();