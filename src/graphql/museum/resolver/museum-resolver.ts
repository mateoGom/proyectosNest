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

  @Mutation(returns => MuseumModel)
  async updateMuseum(@Args('input') input: MuseumDto) {
    const museum = await this.museumService.update(input.id, input);
    return museum
  }

  @Mutation(returns => MuseumModel)
  async deleteMuseum(@Args('id') id: string) {
    const museum = await this.museumService.delete(id);
    return museum
  }


}










