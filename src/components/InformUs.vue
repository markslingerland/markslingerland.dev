<template>
  <div class="flex flex-col px-4 items-center font-light italic">
    {{ $t('WE_ARE_MARRYING') }}

    <button class="w-min mt-6 bg-[#424348] hover:bg-[#53545B]
    text-white py-2 px-4 whitespace-nowrap" @click="openRSVP()">
      {{ $t('LET_US_KNOW') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'InformUs',
  methods: {
    openRSVP() {
      window.open(this.$t('RSVP_URL'), '_blank');
    },
  },
};
</script>
