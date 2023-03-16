import { IsNotEmpty, IsString } from "class-validator";

export class UpdateWeekDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;
  
  @IsString()
  @IsNotEmpty()
  body: string;
  
  @IsString()
  imgSrc: string;
  
  @IsString()
  date: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}