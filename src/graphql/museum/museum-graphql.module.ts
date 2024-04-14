import { Module } from '@nestjs/common';
import { MuseumResolver } from './resolver/museum-resolver';
import { MuseumModule } from 'src/museum/museum.module';


@Module({
  providers: [ MuseumResolver],
  imports:[MuseumModule]
})
export class MuseumGraphqlModule {}
