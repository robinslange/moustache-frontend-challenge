<template>
  <div
    class="my-2 desktop:py-0 mobile:py-8 flex flex-row desktop:flex-nowrap mobile:flex-wrap justify-center"
  >
    <div>
      <v-img max-width="500" :src="require('@/assets/classic-tee.jpg')" />
    </div>
    <div class="desktop:w-3/12 px-2">
      <div class="my-4 text-xl darkFontColor">
        Classic Tee
      </div>
      <div class="font-bold darkFontColor my-4 text-sm">
        $75.00
      </div>

      <div>
        <v-card-text style="padding: 0;" class="lightFontColor">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Aliquam id eros mi. Nulla eu sapien nec
          turpis mollis laoreet. Donec accumsan, mauris non pellentesque
          consectetur, quam velit varius turpis, non eleifend purus dolor at
          erat.
        </v-card-text>
        <div class="my-8 mx-0">
          <span class="text-uppercase lightFontColor text-xs font-bold">
            Size&nbsp;<span class="required">*</span>:
          </span>

          <SizeSelector @selected="setSize" :size="size" />
        </div>

        <v-btn
          @click="addToCart"
          depressed
          tile
          class="addToCart text-uppercase"
        >
          Add to Cart
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SizeSelector: () => import("@/components/items/SizeSelector"),
  },
  name: "ShopPage",

  data: () => ({
    size: null,
    err: null,
    errMsg: null,
  }),
  methods: {
    setSize(size) {
      if (size === this.size) {
        this.size = null;
      } else {
        this.size = size;
      }
    },
    addToCart() {
      if (this.size) {
        this.err = false;
        let payload = {
          item: "Classic Tee",
          price: "75.00",
          size: this.size,
          quantity: 1,
        };
        this.$store.commit("ADD_TO_CART", payload);
        this.$store.dispatch("addedToCartAlert", payload);
      } else {
        this.$store.dispatch("noSizeSelectedAlert");
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.addToCart {
  border: 2px solid;
  font-weight: bold;
  @apply border-gray-700 py-2 px-5;
}
.addToCart:active {
  border: 2px solid;
  font-weight: bold;
  @apply border-gray-700 py-2 px-5;
}
</style>
