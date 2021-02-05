<template>
  <div :class="$style.empty_basket">
    <p :class="`${$style.basket_product_body__empty_text} ${$style.mrg_top}`">
      Пока что вы ничего не добавили в корзину
    </p>
    <button 
      :class="`${$style.basket_product__btn} ${$style.mrg_top}`"
      @click="basketHalder"
      >
      Перейти к выбору
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: mapMutations({
    basketHalder: "shopBasket/basketHalder",
  }),
}
</script>

<style module lang="scss">
.mrg_top {
  margin: 24px 0 0 0;
}
.basket_product__btn {
  cursor: pointer;
  width: 100%;
  height: 50px;
  background: $black;
  color: $white;
  border-radius: 8px;
  @include font-weight-n;
  font-size: 16px;
  border: 0px;
}
</style>