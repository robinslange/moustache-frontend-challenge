<template>
  <v-card max-height="175" width="350" flat>
    <div class="ma-4 flex flex-row">
      <div cols="3">
        <v-img
          class="elevation-0"
          width="100"
          height="120"
          :src="require('@/assets/classic-tee.jpg')"
        />
      </div>
      <div class="px-2">
        <div class="text-gray-500 my-2">
          {{ item.item }}
        </div>
        <span class="text-gray-600 flex-row inline">
          {{ item.quantity }}x
          <span class="font-bold text-gray-600">${{ item.price }}</span>
        </span>
        <div class="text-gray-500  my-2">Size: {{ item.size }}</div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  name: "CartItem",
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style></style>
