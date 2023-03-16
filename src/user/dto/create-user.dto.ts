import { IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsPhoneNumber()
    phone_number: string;

    @IsStrongPassword()
    password: string;
}