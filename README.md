# PoC for PayPal In-Context Experience w/o PayPal Button

Merchants may want to customize the PayPal button to match their design.

The styling options the PayPal JS SDK provides may not be sufficient in such cases.

This is a proof of concept showcasing how to technically still use the JS SDK (instead of a redirect).

This comes with the advantage of still having the "in-context" experience (aka "pop-up" aka "mini-browser").

## What's the relevant code

Check out the [`lib`](./src/lib) folder. 

[`paypal.js`](./src/lib/paypal.js) is the prototypical client-side JS SDK integration.

[`PayPalButton.svelte`](./src/lib/PayPalButton.svelte) contains a rough PayPal button integration in Svelte (without implemented callbacks or even server-side references).

[`CustomPayPalButton.svelte`](./src/lib/CustomPayPalButton.svelte) ultimately shows how to build your custom PayPal Button that (through a trick) still triggers the "in-context" flow.

## How to run the app

Install the dependencies:

```bash
npm install
```

Execute the app in dev mode:

```bash
npm run dev
```

## What is the fundamental idea

Since the PayPal button is protected in an iframe (and browsers do not even allow delegating clicks anymore), the only remaining option is to stack two buttons behind each other and visually hide the PayPal button on top.

So the steps performed here are:
1. Ensure both buttons (custom and official) behave the same in all viewports with regards to size
2. Stack them with the official button being on top.
3. Apply oppacity to the official button.
