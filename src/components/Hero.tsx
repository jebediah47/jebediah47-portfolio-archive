import "../css/Hero.css";

export const Hero = () => {
  return (
    <div class="hero min-h-screen" id="hero__component">
      <img class="hero__img" src="https://i.imgur.com/LV18DAU.jpeg" />
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="mockup-code">
          <pre data-prefix="$">
            <code>jebfetch</code>
          </pre>
          <pre data-prefix=">" class="text-warning">
            <code>⚙️ Fedora Linux 36</code>
          </pre>
          <pre data-prefix=">" class="text-error">
            <code>🤖 AMD Ryzen 5 2600</code>
          </pre>
          <pre data-prefix=">" class="text-indigo-300">
            <code>🪟 KDE</code>
          </pre>
          <pre data-prefix=">" class="text-info">
            <code>🐧 Linux 5.19 Xanmod</code>
          </pre>
          <pre data-prefix=">" class="text-blue-500">
            <code>⌨️ /bin/zsh</code>
          </pre>
          <pre data-prefix=">" class="text-green-300">
            <code>📏 🤯GB</code>
          </pre>
          <pre data-prefix=">">
            <code>Exit code: 0</code>
          </pre>
        </div>
        <div>
          <h1 class="text-5xl font-bold">Christian Llupo</h1>
          <p class="py-6">
            👋 I'm Christian a high-school student and full-stack dev and
            welcome to my personal portfolio! <br />I specialize on building
            Node and Python applications, click the button below to see some
            <br />
            projects that I have made or the GitHub button to go to my GitHub
            profile.
          </p>
          <button class="btn btn-primary">Projects</button>
          <label for="github-redirect-modal" class="btn modal-button ml-3">
            GitHub
          </label>
        </div>
      </div>

      <input type="checkbox" id="github-redirect-modal" class="modal-toggle" />
      <label for="github-redirect-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">⚠️ You are about to be redirected!</h3>
          <p class="py-4">
            You are about to be redirected! If you click the button below, you
            are going to be redirected to my GitHub profile.
          </p>
          <div class="modal-action">
            <a href="https://github.com/jebediah47" class="btn">
              Yes Redirect Me
            </a>
          </div>
        </label>
      </label>
    </div>
  );
};
