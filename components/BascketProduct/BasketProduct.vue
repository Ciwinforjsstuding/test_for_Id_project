<template>
  <div :class="$style.warepper_basket">
    <div 
      :class="$style.background"
      @click="basketHalder"
    ></div>
    <div :class="$style.basket_product">
      <div :class="$style.basket_product_header">
        <h1 :class="$style.basket_product_header__title">Корзина</h1>
        <div 
          :class="$style.basket_product_header__icon" 
          @click="basketHalder"
        >
          <img src="../../static/cross.svg" alt="">
        </div>
      </div>
      <div :class="$style.basket_product_body">
        <EmptyBascket v-if="getCounterProducts === 0"/>
        <FullBasket v-if="getCounterProducts > 0 && getShowSuccessBasacket !== true"/>
        <SuccessBascket v-if="getShowSuccessBasacket === true"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default { 
  methods: {
    ...mapMutations({
      basketHalder: "shopBasket/basketHalder"
    }),
  },
    computed: {
    ...mapGetters({
      getCounterProducts: "shopBasket/getCounterProducts",
      getProductsOnBasket: "shopBasket/getProductsOnBasket",
      getShowSuccessBasacket: "shopBasket/getShowSuccessBasacket"
    })
  }

}
</script>

<style module lang="scss">
.background {
  width: 75%;
  height: 100vh;
  background: $grey-extra-light;
  opacity: 50%;
}
.warepper_basket {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  @include flex;
  @include justify-start;

}
.basket_product {
  // position: absolute;
  // right: 0;
  // top: 0;
  height: 100vh;
  width: 25%;
  background: $white;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  &_header {
    margin: 52px 0 0 0;
    width: 100%;
    @include flex;
    @include justify-between;
    @include items-center;
    &__title {
      margin: 0 0 0 48px;
      @include font-weight-b;
      font-size: 32px;
      color: $black;
    }
    &__icon {
      cursor: pointer;
      margin: 0 48px 0 0;
      color: $black;
    }
  }
  &_body {
    @include flex;
    @include flex-column;
    @include items-center;
    height: 80%;
  }
}
</style>