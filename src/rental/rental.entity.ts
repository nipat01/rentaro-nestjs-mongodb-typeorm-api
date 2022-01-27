import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "rentaro_rental" })
export class Rental {

    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    created: string

    @Column()
    rent_begin: string

    @Column()
    rent_end: string

    @Column()
    car_id: string

    @Column()
    car: string

    @Column()
    renter_id: string

    @Column()
    renter: string

    @Column()
    owner_id: string

    @Column()
    owner: string

    @Column()
    start_date: Date;
    // start_date: string;

    @Column()
    end_date: Date;
    // end_date: string;

    @Column()
    cost: string;

    @Column()
    pickup_time: string;

    @Column()
    receive_time: string;

    @Column()
    status: string;
    // status[WaitingApprove, Pending, OnProcess, Done, Cancel]
    @Column()
    descriptionOwner: string;

    @Column()
    descriptionRenter: string;
}