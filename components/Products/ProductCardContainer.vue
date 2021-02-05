<template>
  <div
    :class="$style.products_cards"
  >
    <div :class="$style.preload" v-if="getProducts.length === 0">
      Загрузка..
    </div>
    <div :class="$style.products_cards_container" v-else>
      <ProductCard 
        v-for="product of getProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async mounted() {
    if (this.$store.getters["product/getCurrentCategory"] > 0) {
      await this.$store.dispatch("product/fetchProductForCategory");
    }
  },
  computed: {
    ...mapGetters({
    getProducts: "product/getProducts",
  })
  },
}
</script>

<style module lang="scss">
.products_cards {
  margin: 100px 0 0 0;
  width: 100%;
  overflow: auto;
  &_container {
    width: inherit;
    @include flex;
    @include flex-wrap;
  }
}

.preload {
  color: $grey;
  font-size: 22px;
  @include font-weight-b;
}
</style>