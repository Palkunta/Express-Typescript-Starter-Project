export interface AppERROR extends Error {
    statusCode : number ;
}

export class Internal_ServerERROR implements AppERROR {
    message: string;
    statusCode: number;
    name : string;
    constructor(message:string){
        this.statusCode = 500;
        this.message = message ;
        this.name = "Internal_Srvrz-Error12345";
    }
}

export class Not_FOUND_error implements AppERROR {
    message: string;
    statusCode: number;
    name : string;
    constructor(message:string){
        this.statusCode = 404;
        this.message = message ;
        this.name = "Not_found-Error12345";
    }
}

export class Forbidden_ERROR implements AppERROR {
    message: string;
    statusCode: number;
    name : string;
    constructor(message:string){
        this.statusCode = 403;
        this.message = message ;
        this.name = "Forbideen-Error12345";
    }
}

export class ConflictERROR implements AppERROR {
    message: string;
    statusCode: number;
    name : string;
    constructor(message:string){
        this.statusCode = 409;
        this.message = message ;
        this.name = "conflicto-Error12345";
    }
}

