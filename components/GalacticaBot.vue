<template>
  <div class="card card-compact w-96 bg-slate-700 shadow-xl">
    <div class="card-body mx-3">
      <h2 class="card-title">galactica-bot</h2>
      <p class="text-base">
        A open-source Discord bot made with Typescript using the Discord.js v13
        library.
      </p>
      <div class="divider">Programming languages</div>
      <div class="flex flex-row justify-center items-center mb-5">
        <h1>TypeScript</h1>
        <progress
          class="progress progress-info w-56 ml-2"
          value="95"
          max="100"
        ></progress>
      </div>
      <div class="card-actions justify-end">
        <NuxtLink
          to="https://github.com/jebediah47/galactica-bot"
          class="btn btn-primary btn-outline"
          >GitHub Repo</NuxtLink
        >
        <NuxtLink to="https://galacticabot.vercel.app" class="btn"
          >Documentation</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
