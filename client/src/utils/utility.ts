import type { CheckoutQueue } from '../types/index'

function findNextCheckout(checkouts: CheckoutQueue[]): number {
  const totals = checkouts.map(q => q.customers.reduce((a, b) => a + b, 0));
  const minTotal = Math.min(...totals);
  return totals.indexOf(minTotal);
}

export {
    findNextCheckout
}
