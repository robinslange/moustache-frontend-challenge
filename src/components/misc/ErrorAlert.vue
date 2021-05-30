<template>
  <v-snackbar
    v-model="err"
    color="error"
    class="my-12"
    width="300"
    app
    dismissible
    timeout="2500"
    top
    fixed
  >
    {{ errMsg }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ErrorAlert",
  data: () => ({}),
  methods: {},
  computed: {
    ...mapState(["errMsg"]),
    err: {
      get() {
        return this.$store.state.err;
      },
      set(val) {
        this.$store.commit("SET_ERROR_VISIBILITY", val);
      },
    },
  },
};
</script>

<style></style>
