import ky, { type KyInstance } from 'ky';

type PublicMethods = 'get' | 'post' | 'put' | 'delete';
type PublicInstance = Readonly<Pick<KyInstance, PublicMethods>>;

export default abstract class HttpClient {
  private readonly internalClient: KyInstance;

  constructor() {
    this.internalClient = this.createInstance();
  }

  protected get httpClient(): PublicInstance {
    return {
      get: this.internalClient.get,
      post: this.internalClient.post,
      put: this.internalClient.put,
      delete: this.internalClient.delete
    }
  }

  private createInstance(): KyInstance {
    return ky.extend({
      prefixUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
      headers: { 
        'Accept': 'application/json'
      }
    });
  }
}