<template>
  <span class="my-3 mx-2 flex flex-row">
    <v-row class="select-none">
      <div
        cols="1"
        class="text-center mx-1 px-4 py-2 cursor-default"
        :class="[isSelected('S') ? 'selected' : 'notSelected']"
        @click="$emit('selected', 'S')"
      >
        S
      </div>
      <div
        cols="1"
        class="text-center mx-1 px-4 py-2 cursor-default"
        :class="[isSelected('M') ? 'selected' : 'notSelected']"
        @click="$emit('selected', 'M')"
      >
        M
      </div>
      <div
        cols="1"
        class="text-center mx-1 px-4 py-2 cursor-default"
        :class="[isSelected('L') ? 'selected' : 'notSelected']"
        @click="$emit('selected', 'L')"
      >
        L
      </div>
    </v-row>
  </span>
</template>

<script>
export default {
  props: ["size"],
  name: "SizeSelector",
  data: () => ({}),
  methods: {
    isSelected(size) {
      if (size === this.size) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {},
};
</script>

<style lang="postcss" scoped>
.selected {
  border: 2px solid var(--border-dark);
  color: var(--font-dark);
}
.notSelected {
  border: 2px solid var(--border-light);
  color: var(--font-light);
}
</style>
