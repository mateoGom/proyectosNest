import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'museum ' })
export class MuseumModel {

  @Field(type => ID)
  id: string;

  @Field()
  description: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  image: string;

}



