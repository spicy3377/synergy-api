import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin, ReservedUsername } from './admin.entity';
import {
  CreateAdminDto,
  CreateReservedUsernameDto,
  ValidateAdminDto,
} from './dto/create-reserved-username.dto';
import * as bcrypt from 'bcrypt';

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

  async findAllReservedUsernames(): Promise<ReservedUsername[]> {
    return this.reservedUsernameRepository.find();
  }

  async removeRestrictedUser(userId: number): Promise<void> {
    const restrictedUser = await this.reservedUsernameRepository.findOneBy({
      id: userId,
    });

    if (!restrictedUser) {
      throw new NotFoundException('Restricted user not found');
    }

    await this.reservedUsernameRepository.delete(userId);
  }

  async validateAdmin({ email, password }: ValidateAdminDto): Promise<void> {
    const admin = await this.adminRepository.findOne({ where: { email } });

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);

    const newAdmin = this.adminRepository.create({
      ...createAdminDto,
      password: hashedPassword,
      is_super: true, // Set automatically
      talent_dashboard: true, // Set automatically
      deactivated: false, // Set automatically
      created_at: new Date(),
      updated_at: new Date(),
    });

    return this.adminRepository.save(newAdmin);
  }
}
