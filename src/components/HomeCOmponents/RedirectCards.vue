<template>
  <q-card class="my-card bg-indigo-10 text-white" flat bordered>
    <q-card-section horizontal>
      <q-card-section>
        <div class="text-h6">{{ name }}</div>
      </q-card-section>

      <q-separator vertical />

      <q-card-section>
        <q-icon :name="icon" size="3em" />
      </q-card-section>
    </q-card-section>
    <q-card-actions>
      <q-btn flat icon="eva-external-link" :to="path" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ["name", "path", "icon"],
  setup() {
    return {};
  },
};
</script>
