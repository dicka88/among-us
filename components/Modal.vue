<template>
  <div class="bg-black/40 inset-0 fixed transition-all"
    :class="{ 'opacity-100 visible': open, 'opacity-0 invisible': !open }">
    <div class="relative inset-0">
      <div class="absolute left-1/2 -translate-x-1/2 top-[200px] w-full p-6">
        <div class="bg-white rounded-xl p-6 mx-auto w-full sm:max-w-[500px] space-y-6">
          <header class="flex justify-between">
            <h2 class="text-3xl">{{ title }}</h2>
            <div>
              <button class="hover:bg-gray-200 rounded-full p-1 flex items-center justify-center"
                @click="$emit('close')">
                <Icon name="ic:round-close" class="text-black text-xl" />
              </button>
            </div>
          </header>

          <body>
            <slot />
          </body>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  open: boolean;
}

defineEmits(["close"]);
defineProps<Props>()
</script>