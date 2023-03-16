export class WeekDto {
  _id: string;
  title: string;
  description:string;
  body: string;
  imgSrc: string;
  date: string;
  userId: string;

  constructor(partial: Partial<WeekDto>) {
    Object.assign(this, partial);
  }
}