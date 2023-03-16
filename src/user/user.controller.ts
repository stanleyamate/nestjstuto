import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {

  //injecting the service on controller methods
  constructor(private userService: UserService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers(){
    return this.userService.get();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // here we indicate that we want the id property as a params , parse a pipe (ParseIntPipe) to the id parameter to make sure it is a number since our response is a string...
  //this is a clear demonstration of how to use pipes working with params

  @Patch('/:id')
  updateData(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number) {
    return this.userService.update(updateUserDto, id);
  }

  @Get('/:id')
  getData(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOne(id);
  }

  @Delete('/:id')
  deleteData(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
