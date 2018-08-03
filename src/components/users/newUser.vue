<template>
    <div>
        <form @submit.prevent="addUser()" >
            <h2>{{msg}}</h2>
            <input type="text" v-model="user.first_name" placeholder="Nombre" >
            <input type="text" v-model="user.last_name" placeholder="Apellido">
            <input type="text" v-model="user.email" placeholder="Email">
            <input type="text" v-model="user.gender" placeholder="Genero">
            <button type="submit" >Guardar usuario</button>
        </form>
  <!--       <ul v-if="errors">
            <li v-for="errors"> {{errors}}  </li>
        </ul> -->
    </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      //user: {},
      errors: {}
    };
  },
  props: ["msg", "url", "user", "action"],
  methods: {
    addUser() {
      axios
        [this.user._id != "0" ? "put" : "post"](this.url + "users/" + (this.user._id != "0" ? this.user._id : ""), this.user)
        .then(response => {
          console.log(this.user);
        })
        .catch(response => {
          this.errors = response.data;
          console.log(this.errors);
        });
    }
  },
  beforeUpdate() {
    console.log("HOLA");
  },
  updated() {
    console.log("HOLA 2");
  },
  mounted() {
    console.log("HOLA 3");
  }
};
</script>

