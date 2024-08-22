<template>
  <div>
    <NuxtPage />
    <Toaster class="!bottom-4 !top-auto" />
  </div>
</template>

<script setup>
import "./styles/animation.css"
import { Toaster } from "@steveyuowo/vue-hot-toast";

</script>

<style>
.VueHotToast__toast-container {
  bottom: 2em !important;
  top: auto !important;
}
</style>
