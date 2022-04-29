<template>
  <div>
    <nav-bar />
    <div class="flex flex-col items-center">
      <inform-us class="py-8" />
      <img class="pt-4" src="../assets/wedding/banner.png"/>
      <img :src="require('@/assets/wedding/card_' + $i18n.locale + '.png')"/>

      <div class="flex flex-col items-center px-8 font-light pb-20">
        <div class="py-20 text-3xl font-serif">{{ $t('MORE_INFORMATION') }}</div>

        <img class="w-42" src="../assets/wedding/dress_code.svg"/>
        <div class="py-8">{{ $t('DRESS_CODE') }}</div>
        <hr class="h-[0.5px] w-10 bg-[#CACDDB] mb-8"/>

        <img class="w-42" src="../assets/wedding/color.svg"/>
        <div class="pt-8 pb-4">{{ $t('COLOR_CODE') }}</div>
        <img class="pb-8" src="../assets/wedding/color_selection.svg"/>
        <hr class="h-[0.5px] w-10 bg-[#CACDDB] mb-8"/>

        <img class="w-42" src="../assets/wedding/gift.svg"/>
        <div class="py-8">{{ $t('GIFT_IDEA') }}</div>
        <hr class="h-[0.5px] w-10 bg-[#CACDDB] mb-8"/>

        <img class="w-42" src="../assets/wedding/accomodation.svg"/>
        <i18n tag="div" class="py-8" path="ACCOMODATION_INFORMATION">
          <br/>
        </i18n>
        <hr class="h-[0.5px] w-10 bg-[#CACDDB] mb-8"/>

        <p>{{ $t('FURTHER_CONTACT')}}</p>
        <b class="font-bold">{{ $t('PERSONS_TO_CONTACT') }}</b>
      </div>
      <div class="flex items-center justify-center bg-[#F6F6F6] w-full h-32">
        <h1 class="text-3xl font-serif">{{ $t('LOCATION') }}</h1>
      </div>
      <MglMap :accessToken="mapSecret" :mapStyle="mapStyle" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import InformUs from '@/components/InformUs.vue';
import Mapbox from 'mapbox-gl';
import { MglMap } from 'vue-mapbox';

export default {
  name: 'Wedding',
  components: {
    NavBar,
    InformUs,
    MglMap,
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  data() {
    return {
      mapSecret: process.env.VUE_APP_MAP_SECRET,
      mapStyle: 'mapbox://styles/mapbox/light-v10',
      coordinates: [0.0, 0.0],
    };
  },
};
</script>
