import { Method, Request } from '@algolia/requester-types';

export default class Fixtures {
  public static request(): Request {
    return {
      url: 'https://algolia-dns.net/foo?x-algolia-header=bar',
      method: Method.Post,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: JSON.stringify({ foo: 'bar' }),
      timeout: 2,
    };
  }
}