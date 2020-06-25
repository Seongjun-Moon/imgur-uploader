<template>
  <div>
    <div>
      <AppHeader />
      <div class="container ui">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
<style>
</style>
