<template>
  <v-container>
    <h1>Title Here</h1>
    <h2>Smaller titler</h2>
    <h3>Even smaller title</h3>
    <p>This is the consent form</p>
    <p>Another paragraph</p>
    <p>More paragraphs</p>  

    <v-btn @click="acceptClicked" color="success">Accept<v-icon>check</v-icon></v-btn>
    <v-btn @click="declineClicked" color="error">Decline<v-icon>close</v-icon></v-btn>
  </v-container>
</template>

<script>
import router from '@/router';
export default {
  setup(){

    const acceptClicked = () => {
      router.push('/instructions')
    }

    const declineClicked = () => {
      console.log("decline button was clicked")
    }

    return {acceptClicked, declineClicked}
  }
};
</script>
