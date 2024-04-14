import { ArtworkEntity } from "../../artwork/artwork.entity/artwork.entity";
import { MovementEntity } from "../../movement/movement.entity/movement.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArtistEntity {
   @PrimaryGeneratedColumn("uuid")
   id: string;
   @Column()
   name: string;
   @Column()
   birthplace: string;
   @Column()
   birthdate: Date;
   @Column()
   image: string;

   @OneToMany(() => ArtworkEntity, artwork => artwork.artist)
   artworks: ArtworkEntity[];

   @ManyToMany(() => MovementEntity, movement => movement.artists)
   movements: MovementEntity[];

}