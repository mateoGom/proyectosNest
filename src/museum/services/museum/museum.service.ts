
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MuseumEntity } from 'src/museum/museum.entity/museum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MuseumService {
    constructor( @InjectRepository(MuseumEntity)
    private museumRepository: Repository<MuseumEntity>){ }


    async findAll(): Promise<MuseumEntity[]> {
        return await this.museumRepository.find();
      }


}
