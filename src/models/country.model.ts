import {Entity, model, property} from '@loopback/repository';

@model()
export class Country extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  capital?: string;

  @property({
    type: 'string',
  })
  population?: string;

  @property({
    type: 'string',
  })
  flag?: string;

  @property({
    type: 'string',
  })
  subregion?: string;

  constructor(data?: Partial<Country>) {
    super(data);
  }
}
