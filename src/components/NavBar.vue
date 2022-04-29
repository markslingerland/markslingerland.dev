<template>
  <nav class="pt-8 w-full h-32 flex flex-row justify-center items-start relative">
    <img class="w-24 md:w-48" alt="Logo" src="../assets/wedding/logo.svg">
    <language-selector class="absolute bottom-0 md:right-10 md:bottom-10"
    :languages="languages"/>
  </nav>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue';

export default {
  name: 'NavBar',
  components: {
    LanguageSelector,
  },

  created() {
    this.languages = ['nl', 'pl', 'en'];
  },
};
</script>
