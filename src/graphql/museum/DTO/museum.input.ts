import { Field, ID, InputType  } from '@nestjs/graphql';
import { IsString , IsUUID } from 'class-validator';

@InputType()
export class MuseumDto {
    @Field(type => ID)
    @IsUUID()
    id: string

    @Field()
    @IsString()
    name: string

    @Field()
    @IsString()
    description: string

    @Field()
    @IsString()
    address: string

    @Field()
    @IsString()
    city: string;

    @Field()
    @IsString()
    image: string;

}
