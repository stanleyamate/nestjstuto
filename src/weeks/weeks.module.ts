import { Module } from '@nestjs/common';
import { WeeksService } from './weeks.service';
import { WeeksController } from './weeks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WeekSchema } from './schema/week.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Week', schema: WeekSchema }])
  ],
  providers: [WeeksService],
  controllers: [WeeksController]
})
export class WeeksModule { }
