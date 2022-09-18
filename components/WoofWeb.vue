<template>
  <div class="card card-compact w-96 bg-slate-700 shadow-xl">
    <div class="card-body mx-3">
      <h2 class="card-title">woof-web</h2>
      <p class="text-base">
        The replacement of the old website of the WoofOS Linux™️ distribution.
      </p>
      <div class="divider">Programming languages</div>
      <div class="flex flex-row justify-center items-center">
        <h1>Svelte</h1>
        <progress
          class="progress progress-error w-56 ml-9"
          value="85"
          max="100"
        ></progress>
      </div>
      <div class="flex flex-row justify-center items-center mb-5">
        <h1>JavaScript</h1>
        <progress
          class="progress progress-warning w-56 ml-2"
          value="15"
          max="100"
        ></progress>
      </div>
      <div class="card-actions justify-end">
        <NuxtLink
          to="https://github.com/jebediah47/woof-web"
          class="btn btn-primary btn-outline"
          >GitHub Repo</NuxtLink
        >
        <NuxtLink to="https://woof-os.github.io" class="btn">Website</NuxtLink>
      </div>
    </div>
  </div>
</template>
