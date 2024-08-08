import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('talents')
export class Talent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  first_name: string;

  @Column({ type: 'varchar', length: 255 })
  last_name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profile_photo: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  confirmation_token: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', default: false })
  phone_verified: boolean;

  @Column({ type: 'varchar', length: 6, nullable: true })
  phone_otp: string;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  display_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  country: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  longitude: number;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  latitude: number;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'text', nullable: true })
  tagline: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  dob: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  register_by: string;

  @Column({ type: 'boolean', default: false })
  is_suspended: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  referral_token: string;

  @Column({ type: 'timestamp', nullable: true })
  token_created_at: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  token: string;

  @Column({ type: 'boolean', default: false })
  token_verified: boolean;

  @Column({ type: 'boolean', default: false })
  email_notification: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fcm_token: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  device_type: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  socket_id: string;

  @Column({ type: 'boolean', default: false })
  notification_email_job_match: boolean;

  @Column({ type: 'boolean', default: false })
  notification_email_job_post: boolean;

  @Column({ type: 'boolean', default: false })
  notification_email_other: boolean;

  @Column({ type: 'boolean', default: false })
  notification_push_job_match: boolean;

  @Column({ type: 'boolean', default: false })
  notification_push_job_post: boolean;

  @Column({ type: 'boolean', default: false })
  notification_push_other: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  linkedin: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  facebook: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  twitter: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  instagram: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  employment_type: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  employment_style: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  employment_search_status: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  current_salary: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  desired_salary: number;

  @Column({ type: 'text', nullable: true })
  career_quest: string;

  @Column({ type: 'text', nullable: true })
  career_achievement: string;

  @Column({ type: 'text', nullable: true })
  career_plan: string;

  @Column({ type: 'text', nullable: true })
  professional_adventure: string;

  @Column({ type: 'int', nullable: true })
  referrer_id: number;

  @Column({ type: 'boolean', default: false })
  terms_agreed: boolean;

  @Column({ type: 'boolean', default: false })
  github: boolean;

  @Column({ type: 'boolean', default: false })
  interviewed: boolean;

  @Column({ type: 'boolean', default: false })
  profile_complete: boolean;

  @Column({ type: 'boolean', default: false })
  is_2fa: boolean;

  @Column({ type: 'boolean', default: false })
  about_you_completed: boolean;

  @Column({ type: 'boolean', default: false })
  career_profile_completed: boolean;

  @Column({ type: 'boolean', default: false })
  credential_completed: boolean;

  @Column({ type: 'boolean', default: false })
  career_completed: boolean;

  @Column({ type: 'varchar', length: 10, nullable: true })
  currency: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fa_token: string;

  @Column({ type: 'timestamp', nullable: true })
  fa_token_created_at: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  job_role: string;

  @Column({ type: 'int', nullable: true })
  years_of_experience: number;
}
