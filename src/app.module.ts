/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Case1Controller } from './case1/case1.controller';
import { Case2Controller } from './case2/case2.controller';

@Module({
  imports: [],
  controllers: [AppController, Case1Controller, Case2Controller],
  providers: [AppService],
})
export class AppModule {}
