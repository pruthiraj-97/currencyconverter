import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_gLIRlvY8kswN3sh574edCbE7CBbdPm885wUMRsXp');

export async function convertCurrency(from,to,amount) {
    try {
        const response=await freecurrencyapi.latest({
            base_currency:from,
            currencies:to
          });
        const data=response.data
        const result=data[to]*amount
        return result
    } catch (error) {
        return error
    }
}