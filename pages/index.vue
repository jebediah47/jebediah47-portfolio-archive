<template>
  <div>
    <Head>
      <Title>Christian Llupo portfolio</Title>
      <Meta
        name="description"
        content="The portfolio website of Christian Llupo aka jebediah47, hosted in GitHub pages."
      />
      <Meta name="keywords" content="jebediah47, portfolio, website, GitHub" />
      <Meta name="author" content="Christian Llupo" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  </div>
  <div>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
  </div>
</template>

<!-- Buymeacoffee widget -->
<script lang="ts">
export default {
  mounted() {
    let buymeacoffee = document.createElement("script");
    buymeacoffee.type = "text/javascript";
    buymeacoffee.setAttribute("data-name", "BMC-Widget");
    buymeacoffee.src =
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    buymeacoffee.setAttribute("data-id", "jebediah47");
    buymeacoffee.setAttribute(
      "data-description",
      "Support me on Buy me a coffee!"
    );
    buymeacoffee.setAttribute("data-message", "");
    buymeacoffee.setAttribute("data-color", "#5F7FFF");
    buymeacoffee.setAttribute("data-position", "Right");
    buymeacoffee.setAttribute("data-x_margin", "18");
    buymeacoffee.setAttribute("data-y_margin", "18");
    buymeacoffee.async = true;
    buymeacoffee.onload = function () {
      let evt = new Event("DOMContentLoaded");
      window.dispatchEvent(evt);
    };
    document.body.appendChild(buymeacoffee);
  },
};
</script>
