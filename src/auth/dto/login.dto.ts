import { IsNotEmpty, IsPhoneNumber, IsStrongPassword } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone_number: string;

    @IsNotEmpty()
    @IsStrongPassword()
    readonly password: string;
}