<template>
  <div class="h-full grid place-items-center">
    <div class="flex flex-col gap-1">
      <h1 class="text-8xl font-semibold">404</h1>
      <h2 class="text-center text-xl font-semibold">Page Not Found</h2>
    </div>

    <RouterLink
      class="absolute bottom-[8vh] text-md border-[2px] font-semibold border-black rounded-lg px-2 py-1 hover:bg-black hover:text-white transition-colors focus:outline-blue-700"
      to="/"
      >Go to Home</RouterLink
    >
  </div>
</template>
