import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({name: "rentaro_car"})
export class Car {

    @ObjectIdColumn()
    _id: string

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

}