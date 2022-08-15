import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'COUR_name',
    })
    name: string
    @Column({
        type: 'boolean',
        name: 'COUR_is_active',
        nullable: true,
        default: true
    })
    isActive?: boolean
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'COUR_image_url',
    })
    course_image: string
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'COUR_description',
    })
    description: string
    @Column({
        type: 'integer',
        nullable: false,
        name: 'COUR_total_lessons',
    })
    total_lessons: number
}
