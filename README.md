# PoC for PayPal In-Context Experience w/o PayPal Button

Merchants may want to customize the PayPal button to match their design.

The styling options the PayPal JS SDK provides may not be sufficient in such cases.

This is a proof of concept showcasing hos to technically still use the JS SDK (instead of a redirect).

This comes with the advantage of still having the "in-context" experience (aka "pop-up" aka "mini-browser").

## What's the relevant code

`PayPalButton.svelte` contains a rough PayPal button integration in Svelte (without implemented callbacks or even server-side references).

`MaskedPayPalButton.svelte` shows how to build your custom PayPal Button that still triggers the in-context flow (~pop-up window).

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

Since the PayPal button is protected in an iframe, the only option is to stack two buttons behin each other and visually hide the PayPal button on top.

So the steps performed here are:
1. Ensure both buttons behave the same in all viewports with regards to re-sizing
2. Stack them with the PayPal button from the JS SDK on top.
3. Apply oppacity to the PayPal button from the JS SDK on top.