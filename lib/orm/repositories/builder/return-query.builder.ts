import {
  BaseModel,
  SaveOptionsStatic,
  FindQuery,
  DeleteOptionsStatic,
  UpdateOptionsStatic,
  FindOptionsStatic,
} from '../../interfaces/externals/express-cassandra.interface';

export class ReturnQueryBuilder<T = any> {
  constructor(private readonly model: BaseModel<T>) {}

  find(query: FindQuery<T>, options: FindOptionsStatic<T> = {}): string {
    return this.model.find(query, {
      ...options,
      return_query: true,
    });
  }

  save(model: Partial<T>, options: SaveOptionsStatic = {}): string {
    return new this.model(model).save({ ...options, return_query: true });
  }

  update(
    query: FindQuery<T> = {},
    updateValue: Partial<T>,
    options: UpdateOptionsStatic<T> = {},
  ): string {
    return this.model.update(query, updateValue, {
      ...options,
      return_query: true,
    });
  }

  delete(query: FindQuery<T> = {}, options: DeleteOptionsStatic = {}): string {
    return this.model.delete(query, { ...options, return_query: true });
  }
}
