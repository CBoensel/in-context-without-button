<script>
  import paypalLogo from "./assets/paypal.svg";
  import CustomPayPalButton from "./lib/CustomPayPalButton.svelte";
  import GitHubAnimatedCorner from "./lib/GitHubAnimatedCorner.svelte";

  export let github;
</script>

<header>
  <GitHubAnimatedCorner {github} />
</header>

<main>
  <div>
    <a href="https://developer.paypal.com" target="_blank" rel="noreferrer">
      <img src={paypalLogo} class="logo paypal" alt="PayPal Logo" />
    </a>
  </div>
  <h1>In-Context w/o Button</h1>

  <div class="card">
    <CustomPayPalButton />
  </div>

  <p>
    Check out <a href="https://developer.paypal.com/sdk/js/" target="_blank" rel="noreferrer"
      >PayPal Developer JavaScript SDK</a
    >, the official JS SDK documentation!
  </p>

  <p class="read-the-docs">
    Click on the PayPal logo to learn more about development with PayPal technologies in general
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .read-the-docs {
    color: #888;
  }
</style>
