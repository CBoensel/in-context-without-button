<script>
  import { initPayPalButtons } from "./paypal.js"

  const clientID = "test";
  const containerID = "#paypal-button__default-button";
  const cartTotal = '0.01';

  initPayPalButtons(clientID, containerID, cartTotal);
</script>

<div class="paypal-button__default-button" id="paypal-button__default-button"></div>