import { IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class UpdateUserDto {
    @IsString()
    username: string;

    @IsPhoneNumber()
    phone_number: string;

    @IsStrongPassword()
    password: string;
}