import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Talent } from './talents/talent.entity';

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true }) // Matches `int unsigned`
  id: number;

  @Column({ type: 'varchar', length: 190 }) // Matches `varchar(190)`
  name: string;

  @Column({ type: 'varchar', length: 190 }) // Matches `varchar(190)`
  type: string;

  @Column({ type: 'text' }) // Matches `text`
  url: string;

  @CreateDateColumn({ type: 'datetime' }) // Matches `datetime`
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime' }) // Matches `datetime`
  updated_at: Date;

  @Column({ type: 'int', unsigned: true, nullable: true }) // Matches `int unsigned`, nullable
  talent_id: number;

  @ManyToOne(() => Talent, (talent) => talent.documents)
  @JoinColumn({ name: 'talent_id' }) // Matches the foreign key column name
  talent: Talent;
}
