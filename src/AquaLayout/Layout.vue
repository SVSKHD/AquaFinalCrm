<template>
  <div>
    <q-layout
      view="lHh Lpr lff"
      container
      class="shadow-2 q-pa-md window-height rounded-borders"
    >
      <q-header elevated class="bg-indigo-10">
        <q-toolbar>
          <q-toolbar-title>Aquakart</q-toolbar-title>
          <q-btn flat to="/" icon="eva-home-outline" />
          <q-btn flat @click="drawer = !drawer" round dense icon="eva-menu-2" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        class="bg-blue-1"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          
          <q-list v-for="item in Menu" :key="item.name">
            <q-item clickable v-ripple :active="link === item.name">
              <q-item-section avatar  >
                <q-icon :name="item.icon" />
              </q-item-section>

              <q-item-section class="layout-menu-name"> {{ item.name }}</q-item-section>
            </q-item>
            <q-separator v-if="item.separator"/>
          </q-list>

        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let drawer=ref(false)
    let Menu = ref([
      {
        name:"Invoices",
        icon:"eva-hard-drive",
        path:"/invoices",
        separator:true
      },
      {
        name:"Transit",
        icon:"eva-car-outline",
        path:"/transit",
        separator:true
      }
    ])
    return {
      drawer,
      Menu
    };
  },
};
</script>
