import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/usuarios/user.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  autor: string;

  @Column({ default: false })
  prestado: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  id_user: User;
}

