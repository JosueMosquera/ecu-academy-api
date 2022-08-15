import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'email',
        unique: true,
    })
    email: string
    @Column({
        type: 'varchar',
        name: 'username',
        nullable: false,
        unique: true
    })
    username: string
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'password',
    })
    password: string
}
