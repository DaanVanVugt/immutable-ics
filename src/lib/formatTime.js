import padStart from 'lodash.padstart'

/**
 * Format a Date object to a valid TIME string.
 *
 * @private
 * @param {Date} date - Date to format.
 */
export default date => {
  return (
    padStart(date.getUTCHours(), 2, 0) +
    padStart(date.getUTCMinutes(), 2, 0) +
    padStart(date.getUTCSeconds(), 2, 0) +
    'Z'
  )
}
