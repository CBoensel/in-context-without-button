import { loadScript } from "@paypal/paypal-js";

async function initPayPalButtons(clientID = 'test', containerID, cartTotal = '0.01') {
  let paypal;
  try {
    paypal = await loadScript({
      "clientId": clientID,
      "disableFunding": 'sepa,giropay,sofort,card',
    });
  } catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
  }

  if (paypal) {
    try {
      await paypal.Buttons({
        style: {
          color: "silver",
          height: 55,
          tagline: false,
        },
        createOrder: function (data, actions) {
          // Set up the transaction
          // @info This is just for testing. 
          // Refer to your server-side integration / your PSP endpoint here 
          // and return the order id
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: cartTotal,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          // Capture order after payment approved
          // @info This is just for testing. 
          // Refer to your server-side integration / your PSP endpoint here 
          return actions.order.capture().then(function (details) {
            alert("Payment successful!");
          });
        },
        onError: function (err) {
          // Log error if something goes wrong during approval
          // Handle error messaging for the buyer
          alert("Something went wrong");
          console.log("Something went wrong", err);
        },
        onCancel: function () {
          // Log error if something goes wrong during approval
          // Handle info messaging for the buyer
          alert("Payment was cancelled");
          console.log("Payment was cancelled");
        },
      }
      ).render(containerID);
    } catch (error) {
      console.error("failed to render the PayPal Buttons", error);
    }
  }
}

export { initPayPalButtons };
