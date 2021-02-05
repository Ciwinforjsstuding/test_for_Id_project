<template>
  <header :class="$style.header">
    <span :class="$style.header__title_text">TestList</span>
    <div :class="$style.header__icon_wrapper" @click="basketHalder">
      <img src="../static/basket.svg" :class="$style.header__icon" alt="корзина">
      <div :class="$style.header__counter_products_icon">{{getCounterProducts}}</div>
    </div>
    <BasketProduct v-show="getStateBasketProduct"/>
  </header>
</template>
<script>
import BasketProduct from './BascketProduct/BasketProduct.vue';
import { mapMutations, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      basketHalder: "shopBasket/basketHalder"
    })
  },
  computed: {
    ...mapGetters({
      getStateBasketProduct: "shopBasket/getStateBasketProduct",
      getCounterProducts: "shopBasket/getCounterProducts",
    })
  },
} 
</script>

<style module lang="scss">
.header {
  @include flex;
  @include justify-between;
  @include items-center;
  height: 10vh;
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  background: $white;
  &__icon_wrapper {
    margin: 0 102px 0 0;
    cursor: pointer;
  }
  &__title_text {
    color: $grey;
    font-weight: bold;
    margin: 0 0 0 86px;
    font-size: 22px;
  }
  &__icon {
    width: 40px;
    height: 40px;
  }
  &__counter_products_icon {
    position: absolute;
    top: 7px;
    right: 96px;
    padding: auto 0;
    @include font-weight-n;
    @include font-weight-b;
    font-size: 12px;
    color: $white;
    background: $grey-light;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }
}
</style>