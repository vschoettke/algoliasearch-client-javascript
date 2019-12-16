import { MappedRequestOptions, RequestOptions } from '.';

export function createMappedRequestOptions(
  requestOptions?: RequestOptions,
  timeout?: number
): MappedRequestOptions {
  const options: RequestOptions = requestOptions || {};

  // eslint-disable-next-line functional/prefer-readonly-type
  const data: { [key: string]: string } = {};

  Object.keys(options).forEach(key => {
    if (['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(key) === -1) {
      data[key] = options[key]; // eslint-disable-line functional/immutable-data
    }
  });

  return {
    data,
    timeout: options.timeout || timeout,
    headers: options.headers || {},
    queryParameters: options.queryParameters || {},
    cacheable: options.cacheable,
  };
}