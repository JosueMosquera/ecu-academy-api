import { IsBoolean, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    readonly name: string
    @IsOptional()
    @IsBoolean()
    readonly isActive?: boolean
    @IsString()
    readonly course_image: string
    @IsString()
    readonly description: string
    @IsPositive()
    readonly total_lessons: number
}
