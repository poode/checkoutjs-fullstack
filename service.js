const axios = require('axios').default


/**
 * @param {{sandbox: boolean, secretKey: string, requestBody: {}}} {
 *     sandbox,
 *     secretKey,
 *     requestBody
 *   }
 * @returns please check https: //docs.checkout.com/docs/request-a-card-payment
 */
async function getUserData({
  sandbox,
  secretKey,
  requestBody
}) {

  if (!sandbox || !secretKey || !requestBody) throw Error(`Error in ${getUserData.name}, please provide me with valid Options`);
  if (typeof sandbox !== 'boolean') throw Error(`Error in ${getUserData.name}, sandbox should be Boolean value`);
  if (typeof secretKey !== 'string') throw Error(`Error in ${getUserData.name}, secretKey should be String value`);
  if (typeof requestBody !== 'object') throw Error(`Error in ${getUserData.name}, requestBody should be an Object`);

  const {
    data
  } = await axios
    .post(`https://api${sandbox? '.sandbox': ''}.checkout.com/payments`,
      requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: secretKey,
        }
      });
  return data;
}




module.exports = {
  getUserData
}