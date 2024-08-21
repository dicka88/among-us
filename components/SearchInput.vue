<template>
  <div
    class="bg-gray-300 py-4 px-4 rounded-xl flex gap-4 items-center w-[90%] lg:w-[40%] text-gray-600 border border-white">
    <BsSearch />
    <input type="text" placeholder="Search Resource..."
      class="w-full text-sm bg-transparent focus-visible:border-0 focus-visible:ring-0" @keyup="handleChange">
  </div>
</template>

<script setup lang="ts">
import { BsSearch } from '@kalimahapps/vue-icons';

type Props = {
  onChange: (keyword: string) => void;
}

const { onChange } = defineProps<Props>()

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  onChange(target?.value || "")
}
</script>