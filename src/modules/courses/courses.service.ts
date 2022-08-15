import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>
  ) { }
  async create(createCourseDto: CreateCourseDto) {
    if (createCourseDto) {
      const course = this.courseRepo.create(createCourseDto)
      const createdCourse = await this.courseRepo.save(course)
      return createdCourse
    }
    else {
      return {
        error: 'debe registrar datos validos para crear un curso'
      }
    }
  }

  async findAll() {
    return await this.courseRepo.find();
  }

  async findOne(id: number) {
    return await this.courseRepo.findOne(id);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const courseToUpdate = await this.courseRepo.findOne({
      where: {
        id
      }
    })
    const updatedCourse = this.courseRepo.merge(courseToUpdate, updateCourseDto)
    return this.courseRepo.save(updatedCourse);
  }

  async remove(id: number) {
    const courseToDelete = await this.courseRepo.findOne({
      where: {
        id
      }
    })
    const courseDeleted = await this.courseRepo.delete(courseToDelete)
    return courseDeleted
  }
}
