<template>
  <div
    class="hero min-h-screen bg-base-200 bg-[url('./assets/webp/desert_van_unsplash.webp')]"
  >
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1
          class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          An error occurred {{ error.statusCode }}
        </h1>
        <p class="py-6 text-xl">
          We are sorry but... We could not find what you were looking for 😭
        </p>
        <NuxtLink to="/" class="btn btn-primary">Go to homepage</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>
