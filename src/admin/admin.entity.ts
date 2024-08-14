import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ default: false })
  is_super: boolean;

  @Column()
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ default: false })
  talent_dashboard: boolean;

  @Column({ default: false })
  deactivated: boolean;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
