import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column('text')
  description: string;

  @Column()
  location: string;

  @Column({ nullable: true })
  salary: string;

  @Column({ nullable: true })
  company_logo: string;

  @Column()
  link: string;

  @Column({ type: 'int', unsigned: true })
  user_id: number;

  @Column({ type: 'int', unsigned: true })
  job_type_id: number;

  @Column({ default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  min_salary: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  max_salary: number;

  @Column()
  status: string;

  @Column({ type: 'int', unsigned: true })
  job_style_id: number;

  @Column({ type: 'int', unsigned: true })
  currency_id: number;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date;

  @Column({ type: 'int', unsigned: true })
  job_title_id: number;

  @Column({ nullable: true })
  experience: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  total_talents: number;
}
