Vue.use(VueResource)

// new Vue({
//     el: '#app',
//     data: {
//         users: []
//     },
//     methods: {
//         loadUsers: function() {
//             this.$http.get("https://jsonplaceholder.typicode.com/todos").then(response => {
//                 this.users = response.body;
//             }, error => {
//                 console.error(error);
//             });
//         }
//     },
//     created: function () {
//         this.loadUsers();
//     }
// })