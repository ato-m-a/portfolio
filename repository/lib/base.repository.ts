import type { KyResponse } from 'ky';
import type { Entity, IRepository } from './types';
import HttpClient from './client';

export default abstract class Repository<
  ENTITY extends Entity<PK, PK_TYPE>, 
  PK extends keyof ENTITY & string = 'id', 
  PK_TYPE = number
> extends HttpClient implements IRepository<ENTITY, PK, PK_TYPE> {
  protected abstract resource: string;

  get = async (pk: PK_TYPE): Promise<ENTITY> => {
    return await this.httpClient.get<ENTITY>(`${this.resource}/${pk}`).json();
  }

  getMany = async (): Promise<ENTITY[]> => {
    return await this.httpClient.get<ENTITY[]>(`${this.resource}`).json();
  }

  create = async (item: Omit<ENTITY, PK>): Promise<ENTITY> => {
    return await this.httpClient.post<ENTITY>(`${this.resource}`, item).json();
  }

  update = async (pk: PK, item: Omit<ENTITY, PK>): Promise<ENTITY> => {
    return await this.httpClient.put(`${this.resource}/${pk}`, item).json();
  }

  delete = async (pk: PK_TYPE): Promise<KyResponse<void>> => {
    return await this.httpClient.delete(`${this.resource}/${pk}`);
  }
}