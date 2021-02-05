<template>
  <div :class="$style.full_basket">
    <div :class="$style.full_basket_wrapp_title">
      <h2 :class="$style.title">Товары в корзине</h2>
    </div>
    <div :class="$style.full_basket_cntainer_products_cards">
      <ProductInBasket 
        v-for="product in getProductsOnBasket"
        :key="product.id"
        :product="product"
      />
    </div>
    <form :class="$style.full_basket_form">
      <h2 :class="$style.title">
        Оформить заказ
      </h2>
      <input type="text" 
        :class="$style.full_basket__input"
        v-model="name" 
        placeholder="Вашей имя"
      >
      <input type="text" 
        :class="$style.full_basket__input"
        v-model="phone"
        v-mask="'+7 (###) ###-##-##'"
        placeholder="Телефон"
      >
      <input type="text" 
        :class="$style.full_basket__input"
        v-model="address"
        placeholder="Адрес"
      >
      <button
        type="submit"
        :class="$style.basket_product__btn"
        @click.prevent="sendForm"
        >
        Отправить
      </button>
      <div :class="$style.warning" v-if="!getIsValidForm">
        <img
          :class="$style.warning__photo"
          src="../../static/exclamation.png" 
          alt="Предупреждение"
        >
        <div :class="$style.warnin__text">
          <p>Все поля обязательны</p>
          <p>После удачной отправки формы содержимое корзины удаляется</p>
        </div>
      </div>
    </form>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      name: "",
      phone: "",
      address: "",
    }
  },
  computed: {
    ...mapGetters({
      getProductsOnBasket: "shopBasket/getProductsOnBasket",
      getIsValidForm: "shopBasket/getIsValidForm",
    }),
  },
  methods: {
    async sendForm() {
      if (!((this.name && this.phone && this.address) == false)) {
        this.$store.commit("shopBasket/successBasackethandler", true);
        this.name = "";
        this.phone = "";
        this.address = "";
        await setTimeout(() => this.$store.commit("shopBasket/successBasackethandler", false), 3000);
        return this.$store.commit("shopBasket/formHandler", true);
      } else {
        this.$store.commit("shopBasket/formHandler", false);
        await setTimeout(() => this.$store.commit("shopBasket/formHandler", true), 2000);
      }
    }
  },
}
</script>

<style module lang="scss">
.full_basket {
  width: 100%;
  @include flex;
  @include flex-column;
  @include items-center;
  &_wrapp_title {
    width: 80%;
  }
  &_cntainer_products_cards {
    @include flex;
    @include flex-column;
    @include items-center;
    width: 100%;
    height: 400px;
    overflow: auto;
    margin: 10px 0 0 0;
  }
  &_form {
    @include flex;
    @include flex-column;
    width: 80%;
  }
  &__input {
    outline: 0;
    background: $grey-extra-light;
    padding: 15px;
    margin: 10px auto;
    border: 0px;
    border-radius: 8px;
    width: 80%;
    &::placeholder {
      color: $grey-light;
      @include font-weight-n;
      font-size: 16px;
    }
  }
}

.title {
  @include font-weight-n;
  font-size: 18px;
  color: $grey;
}

.basket_product__btn {
  cursor: pointer;
  outline: 0;
  border-radius: 8px;
  border: 0px;
  background: $black;
  color: $white;
  padding: 15px 0;
  margin: 15px 0 0 0;
  &:hover {
    background: $grey;
  }
}

.warning {
  @include flex;
  @include items-start;
  margin: 10px 0 0 0;
  &__photo {
    margin: 0 10px 0 0;
  }
  &__text {
    @include flex;
    @include flex-column;
    @include items-start;
    display: flex;
    color: $black;
    @include font-weight-n;
    font-size: 16px;
  }
}
</style>