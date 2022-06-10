<template>
  <v-container>
    <p>These will be the final screen</p>
    <v-btn @click="finish">Finish<v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
export default {
  setup(){
    const finish = () => {
      console.log("add completion URL code here")
    }

    return {finish}
  }
};
</script>
