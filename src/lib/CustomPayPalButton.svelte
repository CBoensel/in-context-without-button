<script>
  import PayPalButtons from "./PayPalButtons.svelte"
  import paypalLogo from '../assets/paypal.svg'
</script>

<div class="paypal-button__wrapper">
  <button class="paypal-button__custom-button">
    <img alt="PayPal" class="paypal-button__icon" src="{paypalLogo}">
    Pay with PayPal
  </button>

  <div class="paypal-button__default-button-wrapper">
    <PayPalButtons />
  </div>
</div>

<style>
  .paypal-button__wrapper {
    position: relative;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 9px;
    height: 55px;
  }

  .paypal-button__wrapper:hover {
    transition: border-color 0.25s;
    border: solid 1px #646cff;
  }

  .paypal-button__custom-button {
    position: absolute;
    top: 0;
    left: 0;
    color: #646cff;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paypal-button__icon {
    height: 1em;
    padding: 0.5em;
  }

  .paypal-button__default-button-wrapper {
    opacity: 0.0001;
  }
</style>
