import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { MuseumModel } from '../model/museum-model/museum-model';
import { MuseumService } from 'src/museum/services/museum/museum.service';
import { MuseumDto } from '../DTO/museum.input';


const pubSub = new PubSub();

@Resolver(of => MuseumModel)
export class MuseumResolver {
    constructor(private readonly museumService: MuseumService){}

    @Query(returns => [MuseumModel])
    allMuseum(): Promise<MuseumModel[]> {
      return this.museumService.findAll()
    }

  @Mutation(returns => MuseumModel)
  async addMuseum(
    @Args('newMuseumData') museumDto: MuseumDto,
  ): Promise<MuseumModel> {
    const museum = await this.museumService.create(museumDto);
    pubSub.publish('museumAdded', { museumAdded: museum });
    return museum;
  }
}










