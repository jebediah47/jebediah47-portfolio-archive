<template>
  <div class="py-5" id="projects__element">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-amber-400 font-semibold tracking-wide uppercase"
        >
          Projects
        </h2>
        <p
          class="mt-2 text-3xl text-transparent bg-clip-text leading-8 font-extrabold tracking-tight sm:text-4xl"
          id="my--projects"
        >
          My personal projects
        </p>
        <p class="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
          Some projects made completely by me shown in the cards below.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        ></dl>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center items-center">
        <!-- Woof web card -->
        <div class="m-3 xl:m-8">
          <WoofWeb />
        </div>
        <!-- Galactica bot card -->
        <div class="m-3 xl:m-8">
          <GalacticaBot />
        </div>
        <!-- Portfolio card -->
        <div class="m-3 xl:m-8">
          <Portfolio />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../assets/css/projects_background_blob.css");
@import url("../assets/css/projects_animation.css");
</style>
