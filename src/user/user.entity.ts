import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity({ name: "rentaro_user" })
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    province: string;

    @Column()
    district: string;

    @Column()
    sub_district: string;

    @Column()
    postal_code: string;

    @Column()
    status: string;
}