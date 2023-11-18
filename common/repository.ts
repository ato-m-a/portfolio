import * as fixtures from '@/fixtures';
import type { By, Repository } from '@/types/common/repository';

type FixtureKey = keyof typeof fixtures;

// Fixture
export class FixtureRepository<T> implements Repository<T> {
  private readonly _data: T[];

  constructor(key: FixtureKey) {
    this._data = fixtures[key] as T[];
  }

  getMany(): T[] {
    return this._data;
  }

  // 메서드 체이닝이 가능하도록
  getOne() {
    let options: By<T> | null = null;

    const methods = {
      by: ({ key, value }: By<T>) => {
        options = { key, value };
        return methods;
      },
      execute: () => {
        if (!options) throw new Error('by must be called before execute query.');

        const { key, value } = options;

        const result = this._data.find((item: T) => item[key] === value);
        if (!result) return null;
        
        return result;
      }
    }

    return methods;
  }

  static get<T>(key: FixtureKey): T[] {
    return new FixtureRepository<T>(key).getMany();
  }
}