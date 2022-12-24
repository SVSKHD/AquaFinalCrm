<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-pa-md">
      <q-card flat :class="successClass">
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="bg-indigo-10"
          animated
        >
          <q-step
            :name="1"
            title="Create Invoice"
            icon="settings"
            :done="done1"
          >
          <q-card-section>
          <h4>{{ Label }}</h4>

          <div class="q-pa-md">
            <q-separator class="q-mb-sm" dark />
            <form>
              <div class="text-h6 text-center">Customer Details</div>
              <q-separator class="q-mb-sm" dark />
              <div class="row justify-around q-mb-sm">
                <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                  <q-input
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

              <div class="text-h6 text-center">Product Details</div>
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
    <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-pa-md">
      <q-card class="bg-grey-4 text-grey-10">
        <q-card-section>
          <h4>Live Invoice</h4>
          <q-separator light />
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
    let step = ref(1)
    let done1 = ref(false)
    let done2 = ref(false)
    let done3 = ref(false)

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
      //functions
    };
  },
};
</script>
