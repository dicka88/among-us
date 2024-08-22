<template>
  <button class="py-2 px-4 rounded-full border text-gray-500 border-transparent hover:border-gray-300"
    :class="{ 'text-black !border-gray-300 bg-gray-100': isActive }" @click="() => click(name)">
    {{ name }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

type Props = {
  name: string;
  isActive: boolean;
  click: (tab: string) => void
}

const { name, isActive, click } = defineProps<Props>()

</script>