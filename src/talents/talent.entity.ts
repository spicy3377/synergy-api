import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Talent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isVerified: boolean;

  @Column({ type: 'date' })
  createdAt: string;
}
