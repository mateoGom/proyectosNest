
import { IsString , IsUUID } from 'class-validator';

export class MuseumDto {

    @IsUUID()
    id: string

    @IsString()
    name: string

    @IsString()
    description: string

    @IsString()
    address: string

    @IsString()
    city: string;

    @IsString()
    image: string;

}
