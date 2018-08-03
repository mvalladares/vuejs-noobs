<template>
<div>
    <h1>Users</h1>
    <button @click="addUser()">Nuevo</button>
    <ul>
        <li v-for="user in users" :key="user._id">
         {{ user.first_name }} | <button @click="editUser(user)">Editar</button> | <button @click="deleteUser(user._id)" >Borrar</button>
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
    showForm:false,
      users: {},
      msg: "Para Miguel",
      url: "https://dry-cove-41154.herokuapp.com/",
      user:{
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          _id: "0"
      },
      action:"post"
    };
  },
  methods: {
    getUsers() {
      axios.get(this.url + "users").then(response => {
        this.users = response.data;
        //
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
    addUser(){
        this.showForm = true;
        this.user = {
        first_name: "",
          last_name: "",
          email: "",
          gender: "",
          _id: "0"
        };
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
