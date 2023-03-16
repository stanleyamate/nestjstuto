import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class ResetDto {
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone_number: string;
}