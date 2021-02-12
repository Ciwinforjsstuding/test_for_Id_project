<template>
  <div :class="$style.warning">
    <h1 :class="$style.title">
      Нельзя добавлять одинаковый товар!
    </h1>
  </div>
</template>
<style module lang="scss">
.warning {
  position: absolute;
  width: 80%;
  left: 10%;
  background: $white;
  @include flex;
  @include items-center;
  @include justify-center;
}
.title {
  color: $grey;
  font-size: 22px;
  font-weight: bold;
}
</style>