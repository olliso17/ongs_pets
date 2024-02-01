import { Module } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { OngsController } from './ongs.controller';
import { Ong } from './entities/ong.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ong])],
  controllers: [OngsController],
  providers: [OngsService],
})
export class OngsModule {}
