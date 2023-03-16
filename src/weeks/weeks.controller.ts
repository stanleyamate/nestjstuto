import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateWeekDto } from './dto/updateWeek.dto';
import { CreateWeekDto } from './dto/create-week.dto';
import { WeekDto } from './dto/get-week.dto';
import { WeeksService } from './weeks.service';

@Controller('weeks')
export class WeeksController {
    constructor (
        private readonly WeeksService: WeeksService
    ){}
    @Get()
    getAllWeeks(): Promise<WeekDto[]>{ 
        return this.WeeksService.getAllWeeks()
    }
    
    @Get(':id')
    getWeek(@Param('id') id: string): Promise<WeekDto>{ 
        return this.WeeksService.getWeek(id)
    }

    @Post()
    createWeek(@Body() createWeekDto: CreateWeekDto): Promise<WeekDto[]>{
        return this.WeeksService.create(createWeekDto)
    }

    @Patch(':id')
    updateWeek(@Param('id') id: string, @Body() updateWeekDto: UpdateWeekDto): Promise<WeekDto>{ 
        return this.WeeksService.update(id, updateWeekDto)
    }

    @Delete(':id')
    deleteWeek(@Param('id') id: string): Promise<{message:string, WeekDto}>{ 
        return this.WeeksService.delete(id)
    }
}
