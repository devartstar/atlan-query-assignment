<template>
  <div class="flex flex-wrap -mx-4"></div>

  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(datatable, index) in datatableList"
        :key="index"
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
      >
        <div
          class="hover:background-black z-50 transition duration-150 ease-out"
        >
          <img
            :src="datatable.image"
            alt=" random imgee"
            class="w-full h-96 object-cover object-center rounded-lg shadow-md"
          />
        </div>

        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4
              class="mt-1 text-xl font-semibold uppercase leading-tight truncate"
            >
              {{ datatable.title }}
            </h4>

            <div class="mt-1 text-gray-600">
              {{ datatable.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ordersData from "../../assets/ordersData.jpg";
import productData from "../../assets/productData.webp";
import customerData from "../../assets/customerData.png";

const datatableList = ref([{}]);
datatableList.value = [
  {
    image: ordersData,
    title: "Orders Data Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
  },
  {
    image: productData,
    title: "Products Data Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
  },
  {
    image: customerData,
    title: "Customers Data Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
  },
];
</script>
