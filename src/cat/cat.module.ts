import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cat.entity';
import { BreedEntity } from 'src/breed/breed.entity';
import { BreedService } from 'src/breed/breed.service';
@Module({
  imports: [TypeOrmModule.forFeature([CatEntity, BreedEntity])],
  controllers: [CatController],
  providers: [CatService, BreedService],
})
export class CatModule {}
