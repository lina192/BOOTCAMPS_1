import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampController {

    @Get()
    getAllBootcamps(): string{
        return "Aqui se mostrara todos los Bootcamps"

    }

    @Get(":id")
    getBootcampById(@Param('id')id:string):string{
        return `Se muestra bootcamp por id ${id}`
    }

    @Post()
    createBootcamp(): string{
        return "aqui se va a crear bootcamps"
    }

    @Put (":id")
    updateBootcamp(@Param('id')id:string) :string{
        return `Aqui se ba actualizar el id: ${id}`
    }

    @Delete (":id")
    deleteBootcamp(@Param ('id') id:string): string {
        return `aqui ${id}`
    }
}        
