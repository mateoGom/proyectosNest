import { Module } from '@nestjs/common';
import { MuseumService } from './services/museum/museum.service';
import { HttpModule } from '@nestjs/axios';
import { MuseumController } from './controller/museum/museum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from './museum.entity/museum.entity';

@Module({
  providers: [ MuseumService],
  exports: [MuseumService],
  imports: [HttpModule, TypeOrmModule.forFeature([MuseumEntity])],
  controllers: [MuseumController]
})
export class MuseumModule {}
