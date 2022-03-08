import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

import { BikerampDatabaseModule } from '@bikeramp/bikeramp/database';
import { BikerampStatsModule } from '@bikeramp/bikeramp/stats';
import { BikerampTripsModule } from '@bikeramp/bikeramp/trips';

@Module({
  imports: [
    BikerampDatabaseModule,
    BikerampStatsModule,
    BikerampTripsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
      isGlobal: true
    })
  ]
})
export class AppModule {}
