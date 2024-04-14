import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { MuseumModel } from '../model/museum-model/museum-model';
import { MuseumService } from 'src/museum/services/museum/museum.service';



@Resolver(of => MuseumModel)
export class MuseumResolver {
    constructor(private readonly museumService: MuseumService){}

    @Query(returns => [MuseumModel])
    allMuseum(): Promise<MuseumModel[]> {
      return this.museumService.findAll()
    }
}










