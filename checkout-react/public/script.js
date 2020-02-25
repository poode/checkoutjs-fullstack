const URL = document.URL.split('//');
const API_URL = `${URL[0]}//${URL[1]}get-user-data/`; // 'http://localhost:3001/get-user-data/';
const getUserData = async function getUserData({
  amount,
  currency,
  token,
  reference,
  metadata,
  Authorization
}) {
  const {
    data
  } = await axios.post(API_URL, {
    "source": {
      "type": "token",
      "token": token
    },
    "amount": amount,
    "currency": currency,
    "reference": reference,
    "metadata": metadata
  }, {
    'Content-Type': 'application/json',
    Authorization: Authorization
  });
  return data;
}

const payButton = document.getElementById("pay-button");
const form = document.getElementById("payment-form");

Frames.init("pk_test_35ee23a1-9188-4b9e-b49c-970dac16e778");

Frames.addEventHandler(
  Frames.Events.CARD_VALIDATION_CHANGED,
  function (event) {
    console.log("CARD_VALIDATION_CHANGED: %o", event);

    payButton.disabled = !Frames.isCardValid();
  }
);

function getInputValue(inputId) {
  return document.querySelector(`#${inputId}`).value
}

async function metaDataPrepration(getInputValueFunc) {
  try {
    return JSON.parse(await getInputValueFunc('metadata'))
  } catch (error) {
    const myEvent = new CustomEvent('metaDataError', { 
      bubbles: true,
      detail: new Error('Not Valid Object sent in metadata'),
    });
    window.dispatchEvent(myEvent);

    throw new Error('Not Valid Object sent in metadata');
  }
}

Frames.addEventHandler(
  Frames.Events.CARD_TOKENIZED,
  async function (event) {
    const el = document.querySelector(".success-payment-message");
    el.innerHTML = 'Card tokenization completed<br>' +
      'Your card token is: <span class="token">' + event.token + '</span>';
    const userData = await getUserData({
      amount: await getInputValue('amount'),
      currency: await getInputValue('currency'),
      token: event.token,
      reference: await getInputValue('reference'),
      metadata: await metaDataPrepration(getInputValue),
      Authorization: await getInputValue('authorization')
    });

    const myEvent = new CustomEvent('onUserData', { 
      bubbles: true,
      detail: userData,
    });

    window.dispatchEvent(myEvent);
  }

);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  Frames.submitCard();
});