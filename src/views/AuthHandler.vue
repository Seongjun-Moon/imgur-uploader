<template>
  <div>Logging in...</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(location.hash);
  }
};
console.log("hash : " + window.location.hash);
</script>

<style>
</style>