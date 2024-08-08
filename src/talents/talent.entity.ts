import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('talents')
export class Talent {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column()
  name: string;

  @Column()
  isVerified: boolean;

  @Column({ type: 'date', nullable: true }) // Allow null if needed
  createdAt: string;
}
