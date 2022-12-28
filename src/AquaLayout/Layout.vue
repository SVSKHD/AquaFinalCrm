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
        <div v-for="item in Menu" :key="item" class="menu">
          <q-list v-if="!item.submenu">
            <q-item clickable :to="item.path">
              <q-item-section avatar class="menu-icon">
                <q-icon size="24px" :name="item.icon" />
              </q-item-section>

              <q-item-section class="layout-menu-name">
                {{ item.name }}
              </q-item-section>
            </q-item>
          </q-list>
          <q-expansion-item v-else>
            <template #header>
              <q-item-section avatar class="menu-icon">
                <q-icon size="24px" :name="item.icon" />
              </q-item-section>

              <q-item-section class="layout-menu-name">
                {{ item.name }}
              </q-item-section>
            </template>
          </q-expansion-item>
          <q-separator color="blue-grey-7" />
        </div>
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
    let drawer = ref(false);
    let Menu = ref([
      {
        name: "Invoices",
        icon: "eva-hard-drive",
        path: "/invoices",
        separator: true,
      },
      {
        name: "Transit",
        icon: "eva-car-outline",
        path: "/transit",
        separator: true,
      },
    ]);
    return {
      drawer,
      Menu,
    };
  },
};
</script>
