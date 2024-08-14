import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin, ReservedUsername } from './admin.entity';
import { CreateReservedUsernameDto } from './dto/create-reserved-username.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,

    @InjectRepository(ReservedUsername)
    private readonly reservedUsernameRepository: Repository<ReservedUsername>,
  ) {}

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  async removeAdmin(adminId: number): Promise<void> {
    const admin = await this.adminRepository.findOneBy({ id: adminId });

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    // if (admin.is_super) {
    //   throw new ForbiddenException('Cannot remove a super user');
    // }

    await this.adminRepository.delete(adminId);
  }

  async create(
    createReservedUsernameDto: CreateReservedUsernameDto,
  ): Promise<ReservedUsername> {
    const reservedUsername = this.reservedUsernameRepository.create(
      createReservedUsernameDto,
    );
    return this.reservedUsernameRepository.save(reservedUsername);
  }
}
