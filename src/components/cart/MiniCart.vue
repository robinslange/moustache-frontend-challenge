<template>
  <v-card flat>
    <v-list class="elevation-0" v-for="(item, i) in cart" :key="i">
      <CartItem :item="item" />
    </v-list>
  </v-card>
</template>

<script>
import CartItem from "./CartItem";

export default {
  components: {
    CartItem,
  },
  props: ["cart"],
  name: "MiniCart",
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style></style>
