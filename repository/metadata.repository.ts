import type { MetadataSchema } from '@/schema/metadata.schema';
import HttpClient from './lib/client';

class MetadataRepository extends HttpClient {
  protected resource = 'metadata';

  get = async (): Promise<MetadataSchema> => {
    return await this.httpClient.get<MetadataSchema>(this.resource).json();
  }
}

const metadataRepository = new MetadataRepository();

export default metadataRepository;