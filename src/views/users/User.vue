<template>
  <Card 
  @onChangeUser="getUser" 
  :user="user" />

</template>

<script>
import Card from "@/components/Card.vue";

import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      user: [],
    };
  },
  components: {
    Card,
  },


mounted() {
    this.getUser();
  },

methods: {
    getUser() {

      const url = "https://randomuser.me/api/?results=1";
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.results);
          this.user = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>