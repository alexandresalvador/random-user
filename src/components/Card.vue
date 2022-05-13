<template>
  <div>
    <div
      v-for="(item, index) in user"
      :key="index"
      class="card"
      style="width: 18rem"
    >
      <img :src="item.picture.medium" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title">{{ item.name.first }} {{ item.name.last }}</h3>
        <h3 class="card-title">{{ item.email }}</h3>
        <h3 class="card-title">Idade: {{ item.dob.age }}</h3>

        <button @click="mudar" class="btn btn-primary">
         Mudar
        </button>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    user: {
      type: Array,
      required: true,
    },
  },
  methods: {
    mudar() {
      this.$emit("onChangeUser");
    },
  },
};

</script>