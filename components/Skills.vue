<template>
  <div class="py-8" id="skills__element">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Skills
        </h2>
        <p
          class="mt-2 text-3xl text-transparent bg-clip-text leading-8 font-extrabold tracking-tight sm:text-4xl"
          id="my--skill--set"
        >
          My skill set
        </p>
        <p class="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
          My current skill-set, every technology I know is shown below.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        ></dl>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center items-center">
        <!-- Frontend skills -->
        <div class="m-3 xl:m-8">
          <Frontend />
        </div>
        <!-- Backend skills -->
        <div class="m-3 xl:m-8">
          <Backend />
        </div>
        <!-- CI/CD skills -->
        <div class="m-3 xl:m-8">
          <ContinuousIntegration />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../assets/css/skills_background_blob.css");
@import url("../assets/css/skills_animation.css");
</style>
