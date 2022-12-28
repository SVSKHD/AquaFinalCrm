<template>
  <div>
    <div class="row justify-evenly">
      <div class="col-md-4 col-lg-4 col-xs-12 col-xs-12">
        <q-card>
          <q-card-section>
            <q-input
              dark
              outlined
              dense
              bg-color="grey-3"
              class="text-dark"
              label="name"
            >
              <template v-slot:append>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg" />
                </q-avatar>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-lg-6 col-xs-12 col-xs-12">
        <q-card>
          <q-card-section> </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script></script>
