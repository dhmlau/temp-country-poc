import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Country} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryRepository extends DefaultCrudRepository<
  Country,
  typeof Country.prototype.name
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Country, dataSource);
  }
}
