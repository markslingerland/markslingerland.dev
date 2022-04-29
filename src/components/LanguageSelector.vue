<template>
  <div class="flex">
    <div
      v-for="language in languages"
      :key="language"
      class="p-2 px-4 uppercase bg-[#F6F6F6]"
      :class="{ 'bg-[#E2E2E2]': $i18n.locale === language }"
      @click="$i18n.locale = language"
    >
      {{ language }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
};
</script>
