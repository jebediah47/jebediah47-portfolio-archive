<template>
  <div class="card card-compact w-96 bg-slate-700 shadow-xl">
    <div class="card-body mx-3">
      <h2 class="card-title">jebediah47.github.io</h2>
      <p class="text-base">
        The website you are in right now... And my personal portfolio!
      </p>
      <div class="divider">Programming languages</div>
      <div class="flex flex-row justify-center items-center">
        <h1>Vue</h1>
        <progress
          class="progress progress-success w-56 ml-3"
          value="95"
          max="100"
        ></progress>
      </div>
      <div class="flex flex-row justify-center items-center mb-5">
        <h1>CSS</h1>
        <progress
          class="progress progress-secondary w-56 ml-2"
          value="15"
          max="100"
        ></progress>
      </div>
      <div class="card-actions justify-end">
        <NuxtLink
          to="https://github.com/jebediah47/jebediah47.github.io"
          class="btn btn-primary btn-outline"
          >GitHub Repo</NuxtLink
        >
        <NuxtLink to="https://woof-os.github.io" class="btn"
          >Support me!</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
