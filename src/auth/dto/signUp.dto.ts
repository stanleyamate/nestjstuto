import { IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone_number: string;

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsStrongPassword()
    readonly password: string;
}