<template>
  <div>
    <Header :on-change="handleSearch"></Header>
    <div class="container px-4 max-w-[920px] mx-auto py-10 lg:py-20">
      <div class="space-y-16">
        <div class="flex gap-6">
          <Tab v-for="tab in tabs" :key="tab" :name="tab" :isActive="tab === activeTab" :click="setTab">
            {{ tab }}
          </Tab>
        </div>
        <div>
          <div v-if="filteredChars.length === 0">
            <div class="text-center space-y-4">
              <NuxtImg src="/characters/png/crewmate/red.png" class="max-w-[120px] mx-auto lg:max-w-[130px]" />
              <span>No impostor is found</span>
            </div>
          </div>
          <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <transition-group name="fade-in" mode="out-in">
              <Card v-for="char in filteredChars" :key="char.files.png" :char="char" @preview="handlePreview(char)" />
            </transition-group>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Modal :title="character?.name" :open="modalPreviewOpen" @close="modalPreviewOpen = false">
      <NuxtImg v-if="character" :src="character.files.png" class="w-[350px] mx-auto" />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import characters, { Character } from "../data/characters"
import { useHeadSafe } from "@unhead/vue";

useHeadSafe({
  title: "Among Us - Icons",
  meta: [{
    name: "description", content: "Among Us icons pack"
  }]
})

const activeTab = ref("All");
const keyword = ref("");
const modalPreviewOpen = ref(false);
const character = ref<Character>()

const tabs = ["All", "Crewmate", "Skin", "Pet"]

const setTab = (tab: string) => {
  activeTab.value = tab;
}

const handlePreview = (char: Character) => {
  character.value = char;
  modalPreviewOpen.value = true;
}

const chars = computed(() => {
  if (activeTab.value === "All") {
    const all = Object.values(characters).flat();
    return all;
  }

  const tab = activeTab.value.toLowerCase();
  return characters[tab] || []
})

const filteredChars = computed(() => {
  return chars.value
    .filter(char => char.name.toLowerCase().match(keyword.value.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))
})

const handleSearch = (value: string) => {
  keyword.value = value;
}

</script>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  /* add for smooth transition between elements */
  opacity: 0;
  transform: translateX(30px);
}
</style>