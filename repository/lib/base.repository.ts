import type { KyResponse } from 'ky';
import type { Entity, IRepository } from './types';
import HttpClient from './client';

export default abstract class Repository<
  ENTITY extends Entity<INDEX, INDEX_TYPE>, 
  INDEX extends keyof ENTITY & string = 'id', 
  INDEX_TYPE = number
> extends HttpClient implements IRepository<ENTITY, INDEX, INDEX_TYPE> {
  protected abstract resource: string;

  get = async (index: INDEX_TYPE): Promise<ENTITY> => {
    return await this.httpClient.get<ENTITY>(`${this.resource}/${index}`).json();
  }

  getMany = async (): Promise<ENTITY[]> => {
    return await this.httpClient.get<ENTITY[]>(`${this.resource}`).json();
  }

  create = async (item: Omit<ENTITY, INDEX>): Promise<ENTITY> => {
    return await this.httpClient.post<ENTITY>(`${this.resource}`, item).json();
  }

  update = async (index: INDEX, item: Omit<ENTITY, INDEX>): Promise<ENTITY> => {
    return await this.httpClient.put(`${this.resource}/${index}`, item).json();
  }

  delete = async (index: INDEX_TYPE): Promise<KyResponse<void>> => {
    return await this.httpClient.delete(`${this.resource}/${index}`);
  }
}