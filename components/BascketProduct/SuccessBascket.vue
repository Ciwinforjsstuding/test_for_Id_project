<template>
  <div :class="$style.success_basket">
    <img src="../../static/ok.jpg" alt="Ok!">
    <h1 :class="$style.title">Заявка успешно отправлена</h1>
    <span :class="$style.subtitle">Вскоре наш менеджер свяжется с Вами</span>
  </div>
</template>

<style module lang="scss">
.success_basket {
  width: 100%;
  height: 100%;
  @include flex;
  @include flex-column;
  @include justify-center;
  @include items-center;
}

.title {
  color: $black;
  @include font-weight-b;
  font-size: 24px;
}

.subtitle {
  color: $grey;
  @include font-weight-n;
  font-size: 16px;
}
</style>