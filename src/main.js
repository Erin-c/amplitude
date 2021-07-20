import Vue from 'vue'
import App from './App.vue'
import uiText from '@/content/text.json'

Vue.config.productionTip = false;
Vue.prototype.$uiText = uiText;
// set language to english or spanish
Vue.prototype.$language = function() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const lang = urlParams.get('lang');
	// if(queryString != '' && lang === 'es'){
	// 	return 'spanish';
	// }
	// else{
	// 	return 'english'
	// }
	return 'english';
	// return 'spanish';
}

window.app = new Vue({
  render: h => h(App)
}).$mount('#app')
