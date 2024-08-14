import { Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Post('remove/:id')
  async removeAdmin(@Param('id') id: number): Promise<void> {
    await this.adminService.removeAdmin(id);
  }
}
