<template>
  <section :class="$style.sidebar_category">
    <h1 :class="$style.sidebar_category__title">Каталог</h1>
    <nav :class="$style.sidebar_category_container">
      <ul v-if="getProductsCategory.length > 0">
        <li 
          :class="$style.sidebar_category_container__item_list" 
          v-for="category of getProductsCategory" 
          :key="category.id"
          @click="changeUrl(category.id)"
        >
          <NuxtLink  
            :class="`${$style.sidebar_category__link} 
            ${getCurrentCategory === category.id ? $style.sidebar_category__choosed_link : null}`" 
            :to="`${category.id}`"
            >
              {{category.name}}
          </NuxtLink >
        </li>
      </ul>
      <div 
        :class="$style.preload"
        v-if="getProductsCategory.length === 0"
      >
        Загрузка...
      </div>
    </nav>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async mounted() {
    if (this.$store.getters["product/getProductsCategory"].length === 0) {
      await this.$store.dispatch("product/fetchCategory");
    }
  },
  computed: {
    ...mapGetters({
    getProductsCategory: "product/getProductsCategory",
    getCurrentCategory: "product/getCurrentCategory",
  })},
  methods: {
    changeUrl(id) {
      this.$router.push(id);
      this.$store.commit("product/changeCategory", id);
    }
  }
}
</script>

<style module lang="scss">
.sidebar_category {
  width: 16vw;
  height: 85vh;
  margin: 32px 0 0 0;
  &__title {
    font-size: 32px;
    @include font-weight-b;
    color: $black;
    width: 50%;
    margin: 0 auto;
  }
  &_container {
    width: 50%;
    margin: 0 auto;
    &__item_list {
      list-style-type: none;
    }
  }
  &__link {
    font-size: 16px;
    @include font-weight-n;
    text-decoration: none;
    color: $grey-light;
  }
  &__link:hover {
    color: $grey;
  }

  &__choosed_link {
    text-decoration: underline;
    color: $black;
  }
}
.preload {
  color: $grey;
  font-size: 22px;
  @include font-weight-b;
}
</style>


