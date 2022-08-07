<template>
  <div
    class="hero min-h-screen bg-base-200 bg-[url('/images/coding_background_unsplash.webp')]"
    id="hero__element"
  >
    <!-- Hero content -->
    <div class="hero-content flex-col lg:flex-row-reverse">
      <Jebfetch />
      <div>
        <h1
          class="text-7xl text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-500 to-green-400"
        >
          Christian Llupo
        </h1>
        <!-- About me -->
        <p class="py-6 text-lg">
          👋 I'm Christian Llupo aka jeb47, a high-school student & full-stack
          developer, <br />
          I specialize in the development of full-stack Node and Python
          applications.
        </p>
        <button class="btn btn-primary">Projects</button>
        <label for="github-redirect-modal" class="btn modal-button ml-3"
          >My GitHub</label
        >
        <!-- GitHub redirect modal -->
        <input
          type="checkbox"
          id="github-redirect-modal"
          class="modal-toggle"
        />
        <label for="github-redirect-modal" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-lg font-bold">
              ⚠️ You are about to be redirected!
            </h3>
            <p class="py-4">
              You are going to be redirected to my GitHub profile click the
              button to be redirected.
            </p>
            <div class="modal-action">
              <NuxtLink to="https://github.com/jebediah47" class="btn"
                >Sure Redirect Me</NuxtLink
              >
            </div>
          </label>
        </label>
      </div>
    </div>
  </div>
</template>
