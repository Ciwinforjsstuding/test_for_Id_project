<template>
  <div :class="$style.app">
    <Header />
    <div
      :class="$style.app_body">
      <SideBar />
      <Nuxt />
    </div>
  </div>
</template>

<style module lang="scss">
*{
  padding: 0;
  margin: 0;
}

.app {
  height: 100vh;
  font-family: PT Sans;
  &_body {
    @include flex;
    height: 90vh;
  }
}


</style>