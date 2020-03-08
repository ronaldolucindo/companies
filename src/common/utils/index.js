/**
 * Format currency to Euro using Germany locale
 * @param {number} value value to be formatted.
 * @returns {string} The formatted currency.
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
    minimumFractionDigits: 2
  }).format(value);
}

/**
 * Format date using Germany locale
 * @param {date} date date to be formatted.
 * @returns {string} The formatted currency.
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('de-DE');
}
