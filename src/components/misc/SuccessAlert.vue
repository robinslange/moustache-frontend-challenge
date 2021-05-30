<template>
  <v-snackbar
    v-model="success"
    color="success"
    class="my-2"
    width="300"
    app
    dismissible
    timeout="2500"
    top
    absolute
  >
    {{ successMsg }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ErrorAlert",
  data: () => ({}),
  methods: {},
  computed: {
    ...mapState(["successMsg"]),
    success: {
      get() {
        return this.$store.state.success;
      },
      set(val) {
        this.$store.commit("SET_SUCCESS_VISIBILITY", val);
      },
    },
  },
};
</script>

<style></style>
