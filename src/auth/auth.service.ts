import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";
import * as bcrypt from 'bcryptjs'
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signUp.dto";
import { LoginDto } from "./dto/login.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name)
  private userModel: Model<User>,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
    
  ) { }

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    
    const { phone_number, username, password } = signUpDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      phone_number,
      username,
      password: hashedPassword,
    })

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { phone_number, password } = loginDto;

    //find a user with the given phone number in the DB
    const user = (await this.userModel.findOne({ phone_number })).$clone();
    if (!user) throw new UnauthorizedException('Invalid credentials');

    //  and compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid Password');

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

}