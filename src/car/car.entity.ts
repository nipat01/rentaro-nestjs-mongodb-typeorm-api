import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "rentaro_car" })
export class Car {

    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    owner_id: string
    // owner { } // response
    @Column()
    created: string

    @Column()
    license_plate: string

    @Column()
    car_type: string

    @Column()
    color: string

    @Column()
    engine_size: string

    @Column()
    model: string

    @Column()
    production_year: string

    @Column()
    status: string
    // status[Active, InActive]

    @Column()
    image: string

    @Column()
    cost: string

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


}

// {
//     "owner_id": "nipat.pueksasuwan@gmail.com",
//     "created": "26-01-2022",
//     "license_plate": "",
//     "car_type": "",
//     "model": "",
//     "production_year": "",
//     "status": "",
//     "image": "",
//     "cost": "",
//     "province": "",
//     "district": "",
//     "sub_district"
// }