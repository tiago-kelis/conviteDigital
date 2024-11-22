import {v4 as uuid, validate} from "uuid"

export default class Id {

    static novo(): string {
        return uuid();          
    }

    static validar(id: string): boolean {
        return validate(id);
    }

}


