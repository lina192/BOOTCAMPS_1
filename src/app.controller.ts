import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/ficha")
  getFicha(): string {
    return "Endpoint de la ficha 2902093"
  }

  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param('id') id:string,
                 @Param('ciudad') ciudad:string,
                 @Query('nombre') nombre:string,
                 @Query('edad') edad:number ):Student {
    return new Student(+id,nombre,edad, ciudad);
  }



}
