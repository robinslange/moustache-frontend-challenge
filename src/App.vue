<template>
  <v-app>
    <v-app-bar flat color="#F6F6F7" height="50px" app>
      <v-spacer />
      <v-menu
        right
        v-model="cartOpen"
        rounded="0"
        offset-y
        :close-on-content-click="false"
        :open-on-hover="$vuetify.breakpoint.xs"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :class="{ 'elevation-2': cartOpen }"
            class="mx-1"
            v-on="on"
            v-bind="attrs"
            tile
            depressed
            :icon="$vuetify.breakpoint.xs"
          >
            <!-- I used span instead of div as spans are better for inlined HTML stuctures, a div creates linebreaks -->
            <span class="lightFontColor">
              <span v-if="$vuetify.breakpoint.xs">
                <v-icon>mdi-cart</v-icon>
                ({{ cart.length }})
              </span>
              <span v-else> My Cart ({{ cart.length }}) </span>
            </span>
          </v-btn>
        </template>
        <v-card elevation="2" tile class="my-0 py-0">
          <div v-if="cart.length === 0">
            <v-card-subtitle>Your Cart is Empty</v-card-subtitle>
          </div>
          <div v-else>
            <MiniCart :cart="cart" />
          </div>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main app class="place-items-center pa-0">
      <v-card flat>
        <ShopPage />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import ShopPage from "./components/ShopPage";

export default {
  name: "MoustacheStore",
  // they only sell t-shirts though, no moustaches :(
  components: {
    ShopPage,
    MiniCart: () => import("@/components/cart/MiniCart"),
  },

  data: () => ({
    cartOpen: false,
    //
  }),
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style lang="postcss" scoped>
.openCart {
  @apply bg-gray-50;
}
</style>
