<template>
  <div :class="$style.product_card">
    <div :class="$style.product_card_header">
      <div :class="$style.product_card_header_raiting">
        <img
          :class="$style.product_card_header_raiting__photo"
          src="../../static/star.svg" 
          alt="звезда"
        >
        <div :class="$style.product_card_header_raiting__number">{{product.rating}}</div>
      </div>
        <img 
          :class="$style.product_card_header__photo"
          :src="`${getUrlFromPhoto}${product.photo}`" 
          alt="товар"
        >
      <div 
        :class="$style.product_card_header__icon_add"
        @click="wrapperFn(product)"
      >
        <img 
          src="../../static/card-basket.svg" 
          alt="корзина для добавляения"
        >
      </div>
    </div>
    <div :class="$style.product_card_description">
      <span :class="$style.product_card_description__title">
        {{product.name}}
      </span>
      <div :class="$style.product_card_description_price">
        <span :class="$style.product_card_description_price__text">
          {{product.price}}
        </span>
        <img
          :class="$style.product_card_description_price__rub_icon"
          src="../../static/rub.svg" 
          alt="рублей"
        >
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters({
    getUrlFromPhoto: "url/getUrlFromPhoto",
    getProductsOnBasket: "shopBasket/getProductsOnBasket",
  }),
  props: {
    product: Object,
  },
  methods: {
    async wrapperFn(product) {
      const isRepeatProduct = this.getProductsOnBasket.find((elem) => elem.id === product.id);
      if (isRepeatProduct) {
        this.$store.commit("shopBasket/tyrAddDoubleProductHandler", true);
        await setTimeout(() => this.$store.commit("shopBasket/tyrAddDoubleProductHandler", false), 3000);
      } else {
        this.$store.commit("shopBasket/addProductOnBascket", product);
      }
    }
  }
}
</script>

<style module lang="scss">
.product_card {
  @include flex;
  @include flex-column;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background: $white;
  width: 264px;
  margin: 10px;
  &_header {
    width: 100%;
    @include flex;
    @include justify-around;
    @include items-start;
    margin: 0 0 16px 0;
    &__photo {
      width: 180px;
      height: 180px;
    }
    &_raiting {
      @include flex;
      margin: 0 0 0 10px;
      &__photo {
        margin: 0 5px 0 0;
      }
      &__number {
        @include font-weight-b;
        font-size: 15px;
        color: $yellow;
      }
    }
    &__icon_add {
      margin: 0 10px 0 0;
      cursor: pointer;
    }
  }
  &_description {
    @include flex;
    @include flex-column;
    @include justify-start;
    width: 100%;
    margin: 0 0 0 10px;
    &__title {
      @include font-weight-n;
      font-size: 14px;
      color: $grey;
    }
    &_price {
      @include flex;
      &__text {
        @include font-weight-b;
        font-size: 14px;
        color: $black;
      }
      &__rub_icon {
        margin: 0 0 0 10px;
      }
    }
  }
}
</style>