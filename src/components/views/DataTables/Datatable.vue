<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(datatable, index) in datatableList"
        :key="index"
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
      >
        <router-link :to="`/datatable/${index}`">
          <div
            class="hover:background-black z-50 transition duration-150 ease-out"
          >
            <img
              :src="datatable.image"
              alt=" random imgee"
              class="w-full h-96 object-cover object-center rounded-lg shadow-md"
            />
          </div>
        </router-link>

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
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ordersData from "../../../assets/orders_data.jpg";
import productData from "../../../assets/productData.webp";
import customerData from "../../../assets/customerData.png";

const datatableList = [
  {
    image: ordersData,
    linkto: "/datatable/orderstable",
    title: "Orders Data Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
  },
  {
    image: productData,
    linkto: "/datatable/productstable",
    title: "Products Data Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
  },
  {
    image: customerData,
    linkto: "/datatable/customerstable",
    title: "Customers Data Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
  },
];
</script>
