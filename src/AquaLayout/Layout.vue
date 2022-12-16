<template>
  <div>
    <q-layout
      view="lHh Lpr lff"
      container
      class="shadow-2 window-height rounded-borders"
    >
      <q-header elevated class="bg-indigo-10">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        class="bg-blue-1"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
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
    return {
      drawer: ref(false),
    };
  },
};
</script>
