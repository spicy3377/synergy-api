import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin, ReservedUsername } from './admin.entity';
import { CreateReservedUsernameDto } from './dto/create-reserved-username.dto';

@Controller('admins')
export class AdminController {
  reservedUsernamesService: any;
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Post('remove/:id')
  async removeAdmin(@Param('id') id: number): Promise<void> {
    await this.adminService.removeAdmin(id);
  }

  @Post('reserved-usernames')
  async create(
    @Body() createReservedUsernameDto: CreateReservedUsernameDto,
  ): Promise<ReservedUsername> {
    return this.adminService.create(createReservedUsernameDto);
  }
}
