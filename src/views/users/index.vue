<template>
<div>
    <h1>Users</h1>
    <!-- <button @click="addUser()">Nuevo</button> -->
    <new-user :url="url" :msg="msg" />
    <ul>
        <li v-for="user in users" :key="user._id">
         {{ user.first_name }} | <button>Editar</button> | <button @click="deleteUser(user._id)" >Borrar</button>
        </li>
    </ul>
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
      users: {},
      msg:'Para Miguel',
      url:'https://dry-cove-41154.herokuapp.com/'
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
      axios.delete(url + "users/" + id).then(response => {
        this.getUsers();
      });
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
