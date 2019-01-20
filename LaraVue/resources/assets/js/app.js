/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

// Khai báo component có tên là my-component có nội dung trong MyComponent.vue
Vue.component('my-component', require('./components/MyComponent.vue'));

Vue.component("conditional-redering", require("./components/ConditionalRedering.vue"));

Vue.component("list-rendering", require("./components/ListRendering.vue"));

Vue.component("user-dashboard", require("./components/UserDashboard.vue"));

Vue.component("life-cycle", require("./components/LifeCycle.vue"));

Vue.component("class-binding", require("./components/ClassBinding.vue"));

Vue.component("form-binding", require("./components/FormBinding.vue"));

Vue.component("parent", require("./components/Parent.vue"));

Vue.component("api-calling", require("./components/APICalling.vue"));
const app = new Vue({
    el: '#app'
});