<template>
<div>
    <h1>Users</h1>
    <button>Nuevo</button>
    <hr>
    <ul>
        <li v-for="user in users" :key="user._id">
         {{ user.first_name }} | <button>Editar</button> | <button>Borrar</button>
        </li>
    </ul>
</div>
    
</template>
<script>
let url = "https://dry-cove-41154.herokuapp.com/";

import axios from "axios";

export default {
  data: {
    return: {
      users: {}
    }
  },
  methods: {
    getUsers() {
      axios.get(url + "users").then(response => {
        this.users = response.data;
        console.log(this.users)
      });
    }
  },
  created(){
      this.getUsers();
  }
};
</script>
