import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin, ReservedUsername } from './admin.entity';
import {
  CreateAdminDto,
  CreateReservedUsernameDto,
  ValidateAdminDto,
} from './dto/create-reserved-username.dto';

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

  @Get('all-reserved-usernames')
  async findAllReservedUsernames(): Promise<ReservedUsername[]> {
    return this.adminService.findAllReservedUsernames();
  }

  @Delete('restricted-users/:id')
  async removeRestrictedUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.adminService.removeRestrictedUser(id);
  }

  @Post('validate')
  async validateAdmin(@Body() validateAdminDto: ValidateAdminDto) {
    try {
      await this.adminService.validateAdmin(validateAdminDto);
      return { success: true };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Post('create-admin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }
}
