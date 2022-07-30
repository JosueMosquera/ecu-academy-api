import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'varchar',
        name: 'email',
        unique: true,
    })
    email: string
    @Column({
        type: 'varchar',
        name: 'name',
        unique: true
    })
    username: string
    @Column({
        type: 'varchar',
        name: 'password',
    })
    password: string
}
