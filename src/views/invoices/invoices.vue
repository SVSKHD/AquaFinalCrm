<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-pa-sm">
      <q-card flat>
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          :class="successClass"
          animated
        >
          <q-step
            :name="1"
            title="Create Invoice"
            icon="settings"
            :done="done1"
          >
            <q-card flat :class="successClass">
              <q-card-section>

                <div class="q-pa-md">
                
                  <form>
                    <div class="text-h5">Customer Details</div>
                    <q-separator class="q-mb-sm" dark />
                    <div class="row justify-around q-mb-sm">
                      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <q-input
                          class="q-pa-sm"
                          color="black"
                          bg-color="white"
                          outlined
                          dense
                          v-model="text"
                          label="Customer Name"
                        >
                          <template v-slot:prepend>
                            <q-icon name="eva-person-outline" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <q-input
                          class="q-pa-sm"
                          color="black"
                          bg-color="white"
                          outlined
                          dense
                          v-model="text"
                          label="Customer Email"
                        >
                          <template v-slot:prepend>
                            <q-icon name="eva-email-outline" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                        <q-input
                          class="q-pa-sm"
                          color="black"
                          bg-color="white"
                          outlined
                          dense
                          v-model="text"
                          label="Customer Email"
                        >
                          <template v-slot:prepend>
                            <q-icon name="eva-email-outline" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                    <div class="q-pa-md">
                      <q-input
                        color="black"
                        bg-color="white"
                        outlined
                        dense
                        type="textarea"
                        v-model="text"
                        label="Customer Addresss"
                      >
                        <template v-slot:prepend>
                          <q-icon name="eva-clipboard-outline" />
                        </template>
                      </q-input>
                    </div>

                    <div class="text-h5">Product Details</div>
                    <q-separator class="q-mb-sm" dark />

                    <div class="row justify-around q-mb-sm">
                      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                        <q-input
                          color="black"
                          bg-color="white"
                          outlined
                          dense
                          v-model="text"
                          label="Product Name"
                        >
                          <template v-slot:prepend>
                            <q-icon name="eva-shopping-bag-outline" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                        <q-input
                          color="black"
                          bg-color="white"
                          outlined
                          dense
                          v-model="text"
                          label="Product Quantity"
                        >
                          <template v-slot:prepend>
                            <q-icon name="eva-email-outline" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                        <q-input
                          color="black"
                          bg-color="white"
                          outlined
                          dense
                          v-model="text"
                          label="Prod"
                        >
                          <template v-slot:prepend>
                            <q-icon name="eva-email-outline" />
                          </template>
                        </q-input>
                      </div>
                    </div>

                    <div class=""></div>

                    <q-btn
                      color="white"
                      dense
                      class="full-width"
                      text-color="black"
                      label="Submit"
                    />
                  </form>
                </div>
              </q-card-section>
            </q-card>
            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done1 = true;
                    step = 2;
                  }
                "
                color="primary"
                label="Continue"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="create_new_folder"
            :done="done2"
          >
            An ad group contains one or more ads which target a shared set of
            keywords.

            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done2 = true;
                    step = 3;
                  }
                "
                color="primary"
                label="Continue"
              />
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Create an ad"
            icon="add_comment"
            :done="done3"
          >
            Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.

            <q-stepper-navigation>
              <q-btn color="primary" @click="done3 = true" label="Finish" />
              <q-btn
                flat
                @click="step = 2"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </q-card>
    </div>
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-pa-sm">
      <q-card class="bg-grey-4 text-grey-10">
        <q-card-section>
          <div class="text-h3">Live Invoice</div>
          <q-separator class="q-mb-sm" light />
          <q-card flat>
            <q-tabs
              v-model="tab"
              dense
              flat
              class="tab-text-heading"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="invoices" label="Invoices" />
              <q-tab name="gstinvoices" label="GST-Invoices" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="invoices">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="gstinvoices">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    let title = ref("");
    let Label = ref("Create Invoice");
    let updateStatus = ref(false);
    let success = ref(false);
    let successClass = ref("bg-indigo-10 text-white");
    //steps
    let step = ref(1);
    let done1 = ref(false);
    let done2 = ref(false);
    let done3 = ref(false);
    //tabs
    let tab = ref("invoices");

    watch(updateStatus, () => {
      updateStatus.value
        ? (Label.value = "Update Invoice")
        : (Label.value = "Create Invoice");
    });

    watch(success, () => {
      success.value
        ? (successClass.value = "bg-green-14 text-white")
        : (successClass.value = "bg-indigo-10 text-white");
    });

    return {
      //variables
      title,
      Label,
      updateStatus,
      success,
      successClass,
      //stepper
      step,
      done1,
      done2,
      done3,
      //tabs
      tab,
      //functions
    };
  },
};
</script>
