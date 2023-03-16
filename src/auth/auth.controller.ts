import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { ResetDto } from "./dto/resetPassword.dto";
import { SignUpDto } from "./dto/signUp.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto):Promise<{ token: string }>{
        return this.authService.signUp(signUpDto);
    }

    @Post('login')
    logIn(@Body() loginDto: LoginDto):Promise<{ token: string }>{
        return this.authService.login(loginDto);
    }
   
}