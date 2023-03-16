import { Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UpdateWeekDto } from './dto/updateWeek.dto';
import { CreateWeekDto } from './dto/create-week.dto';
import { WeekDto } from './dto/get-week.dto';
import { Week } from './schema/week.schema';

@Injectable()
export class WeeksService {
    constructor(
        @InjectModel(Week.name) private weeksModel: mongoose.Model<Week>,
    ) { }

    async getAllWeeks(): Promise<WeekDto[]> {
        const weeks: WeekDto[] = await this.weeksModel.find();
        if (!weeks) throw new UnauthorizedException('Error getting all weeks');

        return weeks;
    }

    async getWeek(@Param('id') id: string): Promise<WeekDto> {
        const week: WeekDto = await this.weeksModel.findById(id);
        if (!week) throw new UnauthorizedException('Error getting week data');
        return week;
    }

    async create(createWeekDto: CreateWeekDto): Promise<any> {
        const createdWeek = await this.weeksModel.create(createWeekDto);
        if (!createdWeek._id) throw new UnauthorizedException('Error creating week post');

        return createdWeek.save();
    }

    async update(id: string, updateWeekDto: UpdateWeekDto): Promise<any> {
        const updatedWeek = await this.weeksModel.findByIdAndUpdate(id, updateWeekDto, { new: true });
        if (!updatedWeek._id) throw new UnauthorizedException('Error updating week post');

        return updatedWeek.save();
    }
    async delete(id: string): Promise<any> {

        const deleteWeek = await this.weeksModel.findByIdAndDelete(id);
        if (!deleteWeek._id) throw new UnauthorizedException('Error deleting week post');
        return {
            message: 'Week post deleted',
            data: deleteWeek
        };
    }


}
