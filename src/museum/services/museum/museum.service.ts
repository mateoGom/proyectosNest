
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MuseumDto } from 'src/museum/DTO/museum-dto/museum-dto';
import { MuseumEntity } from 'src/museum/museum.entity/museum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MuseumService {
    constructor( @InjectRepository(MuseumEntity)
    private museumRepository: Repository<MuseumEntity>){ }


    async findAll(): Promise<MuseumEntity[]> {
        return await this.museumRepository.find();
      }


    async create(museum: MuseumDto): Promise<MuseumEntity>{
      return await this.museumRepository.save(museum);
    }

    async update(id: string, museumDto: MuseumDto): Promise<MuseumEntity | undefined> {
      const museumToUpdate = await this.museumRepository.findOneBy({id});
      if (!museumToUpdate) {
          return undefined; // Museum with the given id not found
      }
      const updatedMuseum = { ...museumToUpdate, ...museumDto };
      return await this.museumRepository.save(updatedMuseum);
  }

}
