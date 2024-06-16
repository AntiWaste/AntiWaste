<template>
    <div class="p-6 pt-20 text-center h-auto">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">Let’s have a chat!</h2>
      <p class="mt-2 mb-5 text-sm sm:text-base lg:text-lg">Find out what we can do for your business or home.</p>
      <div class="flex justify-center">
        <div class="flex flex-col sm:flex-row items-center w-full max-w-lg">
          <input
            type="email"
            class="w-full sm:flex-1 px-4 py-2 border border-green-500 rounded-l-lg sm:rounded-none sm:rounded-l-lg focus:outline-none focus:border-green-700"
            placeholder="Enter your e-mail address"
            aria-label="Recipient's email"
          />
          <button
            class="w-full sm:w-auto px-4 py-2 mt-2 sm:mt-0 bg-green-500 text-black rounded-r-lg sm:rounded-none sm:rounded-r-lg hover:bg-green-700 focus:outline-none"
          >
            <b>Submit</b>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChatForm",
  };
  </script>
  