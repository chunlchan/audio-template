<template>
  <v-container>
    <h1>This will be the experiment</h1>

    <p>{{ currentSentence }}</p>
    <v-btn @click="play" :disabled="isPlaying">Play<v-icon>play_circle_filled</v-icon></v-btn>
  </v-container>
</template>

<script>
//import router from '@/router';
import { Howl, Howler } from "howler";
import { computed, onMounted } from "@vue/composition-api";
import { ref } from "@vue/composition-api";
import router from '@/router';
export default {
  setup() {
    const list = ref(null);
    onMounted(async () => {
      let listFetch = await fetch("list.json");
      list.value = await listFetch.json();
    });

    const index = ref(0);
    const isPlaying = ref(false);
    const currentSentence = computed(() => {
      if (list.value != null) {
        return list.value[index.value].text;
      } else {
        return null;
      }
    });
    const currentSound = computed(() => {
      if (list.value != null) {
        return "audio/" + list.value[index.value].sound;
      } else {
        return null;
      }
    });
    const play = () => {
      console.log(list.value[index.value].sound);
      Howler.volume(1);
      isPlaying.value = true;
      let sound = new Howl({
        src: [currentSound.value],
        onend: nextItem,
      });
      sound.play();
    };

    const nextItem = () => {
      isPlaying.value = false;
      index.value += 1;
      if(index.value >= list.value.length){
        router.push("/end");
        index.value -=1;
      }
    };

    return { index, currentSentence, play, list, isPlaying };
  },
};
</script>
