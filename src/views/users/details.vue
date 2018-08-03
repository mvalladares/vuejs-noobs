<template>
    <div>
        <h1>Detalles</h1>
        <ul>
            <li>
                {{user.first_name}}
            </li>
            <li>
                {{user.gender}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            user:{},
            url:'http://localhost:3001/'
        }
    },
    methods:{
        getUser(){
            
            axios.get(this.url + 'users/'+ this.$route.params.slug )
            .then(response => {
                this.user = response.data;
            });
        }
    },
    created(){
        this.getUser()
    },
}
</script>
