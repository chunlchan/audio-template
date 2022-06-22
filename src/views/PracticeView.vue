<template>
    <v-container>
        <p>Hello from practice 123</p>
        <v-btn @click="next">Next<v-icon>chevron_right</v-icon></v-btn>
    </v-container>
</template>


<script>
import router from '@/router';
export default {
  setup(){
    const next = () => {
      router.push('/experiment')
    }

    return {next}
  }
};
</script>