<template>
  <header class="relative">
    <div class="bg-black py-12">
      <div class="container mx-auto text-white flex justify-center">
        <div class="flex gap-8 flex-col items-center">
          <div class="space-y-2 text-center relative shake">
            <NuxtImg src="/among-us.png" alt="Among Us" class="max-w-[300px]" />
            <NuxtImg src="/ufo.png" alt="Ufo" class="max-w-[50px] absolute -top-5 left-[29%]" />
            <p class="text-gray-300">Character Sheet Resource</p>
          </div>
          <div class="flex gap-4">
            <a href="https://www.figma.com/design/05LAbChyWHEE3nahgWHe3U/Among-Us-Character-Sheet" target="_blank">
              <button class="px-4 py-2 hover:bg-gray-800 rounded-lg flex items-center gap-2">
                <DeFigmaOriginal class="inline" />
                Figma
              </button>
            </a>
            <a href="https://github.com/andregans/amongus_character_sheet" target="_blank">
              <button class="px-4 py-2 hover:bg-gray-800 rounded-lg flex items-center gap-2">
                <AkGithubFill class="inline" />
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-0 -translate-y-1/2">
      <div class="flex justify-center">
        <SearchInput :on-change="onChange" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { DeFigmaOriginal } from '@kalimahapps/vue-icons';
import { AkGithubFill } from '@kalimahapps/vue-icons';
import SearchInput from './SearchInput.vue';

type Props = {
  onChange: (keyword: string) => void;
}

const { onChange } = defineProps<Props>()
</script>