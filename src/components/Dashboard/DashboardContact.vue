<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - Messages</h2>
      <div class="overflow-hidden border border-gray-200 rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message Description
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(message, index) in messages" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ message.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ message.email }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ message.description }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          { name: "John Doe", email: "john.doe@example.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { name: "Jane Smith", email: "jane.smith@example.com", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
          { name: "Mike Johnson", email: "mike.johnson@example.com", description: "Nullam ac urna eu felis dapibus condimentum sit amet a augue." },
          { name: "Emily Brown", email: "emily.brown@example.com", description: "Fusce efficitur nisi vel felis vehicula, a feugiat magna rutrum." },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here if needed */
  </style>
  