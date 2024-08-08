import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { Talent } from './talent.entity';

@Controller('talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Get()
  findAll(): Promise<Talent[]> {
    return this.talentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Talent> {
    return this.talentsService.findOne(Number(id));
  }

  @Post()
  create(@Body() talent: Talent): Promise<Talent> {
    return this.talentsService.create(talent);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.talentsService.remove(Number(id));
  }
}
