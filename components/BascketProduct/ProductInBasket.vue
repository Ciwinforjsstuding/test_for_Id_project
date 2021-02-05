<template>
  <div :class="$style.product_card_in_basket">
    <img
      :class="$style.product_card_in_basket__photo"
      :src="`${getUrlFromPhoto}${product.photo}`" 
      alt="фото товара"
    >
    <div :class="$style.product_card_in_basket_description">
      <span :class="$style.product_card_in_basket_description__text">
        {{product.name}}
      </span>
      <p :class="$style.product_card_in_basket_description_price">
        <span :class="$style.product_card_in_basket_description_price__text">
          {{product.price}}
        </span>
        <img src="../../static/rub.svg" alt="рублей">
      </p>
      <div :class="$style.product_card_in_basket_description_rating">
        <img src="../../static/star.svg" alt="рейтинг">
        <span :class="$style.product_card_in_basket_description_rating__text">
          {{product.rating}}
        </span>
      </div>
    </div>
    <img 
      src="../../static/trash-basket.svg" 
      alt="удалить"
      :class="$style.product_card_in_basket__remove_icon"
      @click="deletProductOnBascket(product.id)"
    >
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  props: {
    product: Object,
  },
  computed: mapGetters({
    getUrlFromPhoto: "url/getUrlFromPhoto",
  }),
  methods: mapMutations({
    deletProductOnBascket: "shopBasket/deletProductOnBascket"
  })
}
</script>

<style module lang="scss">
.product_card_in_basket {
  @include flex;
  @include items-center;
  width: 80%;
  &__photo {
    width: 110px;
    height: 110px;
    margin: 0 10px 0 0;
  }
  &_description {
    flex-basis: 35%;
    &__text {
      color: $grey;
      @include font-weight-n;
      font-size: 14px;
    }
    &_price__text {
      color: $black;
      @include font-weight-b;
      font-size: 14px;
    }
    &_rating {
      margin: 10px 0 0 0;
      &__text {
        color: $yellow;
        @include font-weight-b;
        font-size: 19px;
      }
    }
  }
  &__remove_icon {
    cursor: pointer;
    margin: 0 0 0 40px;
    width: 22px;
  }
}


</style>