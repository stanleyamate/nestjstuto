import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entity/user.entity';
import { User, UserDocument } from '../auth/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    private readonly users = [
        {
            _id: 1,
            username: 'john',
            password: 'changeme',
            phone_number: '+23767999599',
        },
        {
            _id: 2,
            username: 'maria',
            password: 'guess',
            phone_number: '+23767994999',
        },
        {
            _id: 3,
            username: "amate",
            password: "Sta123!@#",
            phone_number: "+23767999999",
        },
    ];

    async get(): Promise<UserEntity[]> {
        return [
            {
                _id: "ert234k45j6h4k56j",
                username: "amate",
                password: "$2b$10$0",
                phone_number: "+23767999999",
            }
        ]
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        console.log(createdUser);
        return createdUser.save();
    }

    update(updateUserDto: UpdateUserDto, id: number) {
        return {
            id,
            number: updateUserDto.phone_number,
            username: updateUserDto.username,
        }
    }

    getOne(id: number) {
        return id;
    }

    delete(id: number) {
        return id;
    }
    async findOne(phone_number: string): Promise<any | undefined> {
        return this.users.find(user => user.phone_number === phone_number);
    }
}
