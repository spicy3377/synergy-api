import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Document } from './document.entity';

@Entity('talents')
export class Talent {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true }) // Matches `int unsigned`
  id: number;

  @CreateDateColumn({ type: 'datetime' }) // Matches `datetime`
  created_at: Date;

  @Column({ type: 'tinyint', default: 0 }) // Matches `tinyint(1)`
  verified: boolean;

  @Column({ type: 'varchar', length: 255 }) // Matches `varchar(255)`
  name: string;

  @Column({ type: 'varchar', length: 255 }) // Matches `varchar(255)`
  role: string;

  @OneToMany(() => Document, (document) => document.talent)
  documents: Document[];
}
