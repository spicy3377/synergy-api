import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

@Entity('reserved_usernames')
export class ReservedUsername {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
