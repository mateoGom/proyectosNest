import { Controller, Get } from '@nestjs/common';
import { MuseumService } from 'src/museum/services/museum/museum.service';
import {MuseumEntity } from '../../museum.entity/museum.entity'

@Controller('museum')
export class MuseumController {

constructor(private readonly museumService: MuseumService){}

@Get()
async find(): Promise<MuseumEntity[]>{
    return this.museumService.findAll()
}









}
