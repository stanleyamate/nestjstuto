import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/auth/schemas/user.schema";

export type WeekDocument = HydratedDocument<Week>;

@Schema({
    timestamps: true,
})
export class Week {
    @Prop({ unique: true })
    id: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    body: string;

    @Prop({ required: true})
    imgSrc: string;

    @Prop({ required: true})
    date: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    userId: User;
}

export const WeekSchema = SchemaFactory.createForClass(Week);