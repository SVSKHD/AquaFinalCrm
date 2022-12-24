<template>
  <div class="q-pa-md row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
      <div class="row">
        <div class="q-pa-sm" v-for="item in Menu" :key="item">
          <RedirectCards
            :name="item.name"
            :icon="item.icon"
            :path="item.path"
          />
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import RedirectCards from "@/components/HomeCOmponents/RedirectCards.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: { RedirectCards },
  setup() {
    let Menu = ref([
      {
        name: "Invoices",
        icon: "eva-hard-drive",
        path: "/invoices",
      },
      {
        name: "Transit",
        icon: "eva-car-outline",
        path: "/transit",
      },
    ]);
    return {
      Menu,
    };
  },
};
</script>
