const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

/**
 * Creates request types.
 *
 * @param      {<type>}  base    The base
 * @return     {Array}   { description_of_the_return_value }
 */
export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const req = acc;
    req[type] = `${base}_${type}`;
    return req;
  }, {});
}

/**
 * Helper method to create the action
 *
 * @param      {<type>}  type     The type
 * @param      {<type>}  payload  The payload
 * @return     {Object}  { description_of_the_return_value }
 */
export function action(type, payload = {}) {
  return { type, ...payload };
}
