<template>
    <div>
        <form @submit.prevent="addUser()" >
            <h2>{{msg}}</h2>
            <input type="text" v-model="user.first_name" placeholder="Nombre" >
            <input type="text" v-model="user.last_name" placeholder="Apellido">
            <input type="text" v-model="user.email" placeholder="Email">
            <input type="text" v-model="user.gender" placeholder="Genero">
            <input type="hidden" value="test-test" v-model="user.slug">
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
      errors: {},
      slug: ""
    };
  },
  props: ["msg", "url", "user", "action"],
  methods: {
    addUser() {
      axios[this.user.id ? "put" : "post"](
        this.url + "users/" + (this.user.id ? this.user.id : ""),
        this.user
      )
        .then(response => {
          if (response.data.id) {
            this.$parent.users.push(response.data);
          }
        })
        .catch(response => {
          this.errors = response.data;
          console.log(this.errors);
        });
    }
  },
  beforeUpdate() {
    //console.log("HOLA");
  },
  updated() {
    this.user.slug = this.user.first_name + "-" + this.user.last_name;
  },
  mounted() {
    //console.log("HOLA 3");
  }
};
</script>

