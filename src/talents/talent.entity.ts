import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('talents')
export class Talent {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  profile_photo: string;

  @Column()
  phone: string;

  @Column({ default: false })
  about_you_completed: boolean;

  @Column({ default: false })
  career_completed: boolean;

  @Column({ default: false })
  credential_completed: boolean;

  @Column({ default: false })
  career_profile_completed: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  current_salary: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  desired_salary: number;

  @Column()
  employment_type: string;

  @Column()
  employment_style: string;

  @Column()
  employment_search_status: string;

  @Column()
  professional_adventure: string;

  @Column()
  career_plan: string;

  @Column()
  career_achievement: string;

  @Column()
  career_quest: string;

  @Column({ default: false })
  profile_complete: boolean;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column({ type: 'date', nullable: true })
  created_at: string;
}
