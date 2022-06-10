<template>
  <v-container>
    <p>This is the consent form</p>
    <v-btn @click="next">Next<v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
import router from '@/router';
export default {
  setup(){
    const next = () => {
      router.push('/instructions')
    }

    return {next}
  }
};
</script>
