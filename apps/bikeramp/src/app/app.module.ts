import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikerampDatabaseModule } from '@bikeramp/bikeramp/database';
import { BikerampStatsModule } from '@bikeramp/bikeramp/stats';
import { BikerampTripsModule } from '@bikeramp/bikeramp/trips';

@Module({
  imports: [
    BikerampTripsModule,
    BikerampStatsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    BikerampDatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
