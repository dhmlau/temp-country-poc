import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Country} from '../models';
import {CountryRepository} from '../repositories';

export class CountryController {
  constructor(
    @repository(CountryRepository)
    public countryRepository : CountryRepository,
  ) {}

  @post('/countries', {
    responses: {
      '200': {
        description: 'Country model instance',
        content: {'application/json': {'x-ts-type': Country}},
      },
    },
  })
  async create(@requestBody() country: Country): Promise<Country> {
    return await this.countryRepository.create(country);
  }

  @get('/countries/count', {
    responses: {
      '200': {
        description: 'Country model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Country)) where?: Where,
  ): Promise<Count> {
    return await this.countryRepository.count(where);
  }

  @get('/countries', {
    responses: {
      '200': {
        description: 'Array of Country model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Country}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Country)) filter?: Filter,
  ): Promise<Country[]> {
    return await this.countryRepository.find(filter);
  }

  @patch('/countries', {
    responses: {
      '200': {
        description: 'Country PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() country: Country,
    @param.query.object('where', getWhereSchemaFor(Country)) where?: Where,
  ): Promise<Count> {
    return await this.countryRepository.updateAll(country, where);
  }

  @get('/countries/{id}', {
    responses: {
      '200': {
        description: 'Country model instance',
        content: {'application/json': {'x-ts-type': Country}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Country> {
    return await this.countryRepository.findById(id);
  }

  @patch('/countries/{id}', {
    responses: {
      '204': {
        description: 'Country PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() country: Country,
  ): Promise<void> {
    await this.countryRepository.updateById(id, country);
  }

  @del('/countries/{id}', {
    responses: {
      '204': {
        description: 'Country DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.countryRepository.deleteById(id);
  }
}
