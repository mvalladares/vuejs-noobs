<template>
<div>
    <h1>Users</h1>
    <button @click="addUser()">Nuevo</button>
    <ul>
        <li v-for="user in users" :key="user.id">
         {{ user.first_name }} | <button @click="editUser(user)">Editar</button> | <button @click="deleteUser(user.id)" >Borrar</button>
         <router-link :to="'/user/'+user.slug">Ver detalles</router-link>
        </li>
    </ul>
    <div v-show="showForm">
    <new-user :url="url" :msg="msg" :user="user" :action="action" />
    </div>
</div>
    
</template>
<script>
import newUser from "@/components/users/newUser";

import axios from "axios";

export default {
  components: {
    newUser
  },
  data() {
    return {
      showForm: false,
      users: {},
      msg: "Para Miguel",
      //url: "https://dry-cove-41154.herokuapp.com/",
      url: "http://localhost:3001/",
      user: {
        first_name: "",
        last_name: "",
        email: "",
        gender: ""
      },
      action: "post"
    };
  },
  methods: {
    getUsers() {
        axios.get(this.url + "users").then(response => {
          console.log(_.filter(response.data, (filter)=>{ return filter.first_name == "Alejandro"; }));
          this.users = response.data;
        });
    },
    deleteUser(id) {
      axios.delete(this.url + "users/" + id).then(response => {
        this.getUsers();
      });
    },
    editUser(user) {
      this.user = user;
    },
    addUser() {
      this.showForm = true;
      this.user = {
        first_name: "",
        last_name: "",
        email: "",
        gender: ""
      };
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
