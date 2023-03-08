
export interface Type {
    name : string;
}

export interface TypeResponse {
    name: string;
    url: string;
}

export interface TypeObj {
    type: TypeResponse
}

export interface TypeResponseContainer {
    slot : number;
    type : TypeResponse[];
}