import { Exclude } from 'class-transformer';

export class UserEntity {
  _id: string;
  username: string;
  phone_number: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}