import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  async removeAdmin(adminId: number): Promise<void> {
    const admin = await this.adminRepository.findOneBy({ id: adminId });

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    if (admin.is_super) {
      throw new ForbiddenException('Cannot remove a super user');
    }

    await this.adminRepository.delete(adminId);
  }
}
