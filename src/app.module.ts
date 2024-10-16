import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './bootcamp/bootcamp.controller';
import { UserController } from './controller/user/user.controller';
import { ReviewController } from './controller/review/review.controller';
import { CourseController } from './controller/course/course.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, UserController, ReviewController, CourseController],
  providers: [AppService],
})
export class AppModule {}
