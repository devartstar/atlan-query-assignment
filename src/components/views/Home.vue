<template>
  <div class="bg-white dark:bg-gray-800 m-5">
    <div
      class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
    >
      <h2
        class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
      >
        <span class="block"> SQL For Dummies !!! </span>
        <span class="block text-indigo-500"> Learn and Explore </span>
      </h2>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link to="/datatable">
            <button
              type="button"
              class="py-4 px-6 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              @click="sidebarUpdate(1)"
            >
              Get Started
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-10">
    <div
      class="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800"
    >
      <div class="flex flex-wrap -mx-8" id="details">
        <div class="w-full lg:w-1/2 px-8">
          <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
            <h2
              class="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white"
            >
              Learn SQL Queries with Live Code Updating
            </h2>
            <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed
              porttitor est nibh at nulla. Praesent placerat enim ut ex
              tincidunt vehicula. Fusce sit amet dui tellus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec
              venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh
              at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce
              sit amet dui tellus.
            </p>
            <div class="w-full md:w-1/3">
              <router-link to="/datatable">
                <button
                  type="button"
                  class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  @click="sidebarUpdate(1)"
                >
                  Lets Goooo !!!
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-8">
          <ul class="space-y-4">
            <li class="flex -mx-4">
              <div class="px-4">
                <span
                  class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600"
                >
                  1
                </span>
              </div>
              <div class="px-4">
                <h3 class="my-4 text-xl font-semibold dark:text-white">
                  Add & Select your Dataset
                </h3>
                <p class="text-gray-500 dark:text-gray-300 leading-loose">
                  Select from the pre-stored dataset or import your own dataset
                  as csv file to run queries.
                </p>
              </div>
            </li>
            <li class="flex -mx-4">
              <div class="px-4">
                <span
                  class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600"
                >
                  2
                </span>
              </div>
              <div class="px-4">
                <h3 class="my-4 text-xl font-semibold dark:text-white">
                  Choose Queries
                </h3>
                <p class="text-gray-500 dark:text-gray-300 leading-loose">
                  From the list of given queries, choose the one you one to run,
                  and see the live code update in the editor.
                </p>
              </div>
            </li>
            <li class="flex -mx-4">
              <div class="px-4">
                <span
                  class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600"
                >
                  3
                </span>
              </div>
              <div class="px-4">
                <h3 class="my-4 text-xl font-semibold dark:text-white">
                  Write Queries & See Results
                </h3>
                <p class="text-gray-500 dark:text-gray-300 leading-loose">
                  See the results of the queries run on the dataset, toggle
                  editor view and write your Own Queries and Run.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sidebarUpdate } from "../../composables/Sidebar";
</script>

<style scoped>
.home {
  background: red;
}
</style>
