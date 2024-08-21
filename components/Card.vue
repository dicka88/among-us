<template>
  <div class="border border-gray-300 rounded-xl overflow-hidden p-4 relative group flex flex-col">
    <div class="w-full flex-auto flex items-center justify-center">
      <NuxtImg :src="char.files.png" class="max-w-[120px] lg:max-w-[130px]" />
    </div>
    <div>
      <p>{{ char.name }}</p>
    </div>
    <div
      class="absolute opacity-0 transition-opacity duration-150 group-hover:opacity-100 inset-0 bg-black/15 p-3 flex justify-end items-end">
      <div class="space-y-2">
        <div>
          <button class="hover:bg-black hover:text-white rounded-xl p-2.5 bg-white text-black aspect-square"
            @click="handlePreview" title="Preview">
            <FlImageShadow class="text-2xl" />
          </button>
        </div>
        <div>
          <button class="hover:bg-black hover:text-white rounded-xl p-2.5 bg-white text-black aspect-square"
            @click="handleClipboard" title="Copy">
            <FlFilledTabDesktopCopy class="text-2xl" />
          </button>
        </div>
        <div>
          <button class="hover:bg-black hover:text-white rounded-xl p-2.5 bg-white text-black aspect-square"
            @click="handleDownload" title="Download">
            <MdRoundDownload class="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FlImageShadow } from "@kalimahapps/vue-icons";
import { FlFilledTabDesktopCopy } from '@kalimahapps/vue-icons';
import { MdRoundDownload } from '@kalimahapps/vue-icons';
import { copyImageToClipboard } from 'copy-image-clipboard';
import { toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
import { saveAs } from 'file-saver';

type Props = {
  char: {
    name: string;
    files: {
      png: string;
      svg: string;
    };
  }
}

const { char } = defineProps<Props>();

const handlePreview = () => { }
const handleClipboard = () => {
  copyImageToClipboard(char.files.png)
    .then(() => {
      console.log("image copied");

      toast.success("Image Copied")
    })
    .catch((e) => {
      console.log('Error: ', e.message)
    })
}
const handleDownload = () => {
  saveAs(char.files.png, char.files.png.split("/").pop());
}
</script>