import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({name: "rentaro_rental"})
export class Rental {

    @ObjectIdColumn()
    _id: string

    @Column()
    created: string

    @Column()
    rent_begin: string

    @Column()
    rent_end: string

    @Column()
    car_id: string

    @Column()
    renter_id: string

    @Column()
    renter: string

    @Column()
    owner_id: string

    @Column()
    owner: string

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
    start_date: Date;
    // start_date: string;

    @Column()
    end_date: Date;
    // end_date: string;

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