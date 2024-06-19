
export type Author = {
    id: number;
    lastname: string;
    firstname: string;
    description: string;
    createdAt: Date;
};

export type Cart = {
    id: number;
    createdAt: Date;
    status: string;
    idPaymentCart: Object;
    idUsers: Object;
};

export type Category = {
    id: number;
    name: string; 
    description: string; 
    createdAt: Date; 
};

export type Gender = {
    id: number;
    label: string;
};

export type Genre = {
    id: number; 
    label: string; 
    createdDate: Date;
};

export type Manga = {
    id: number;
    title: string;
    releaseDate: Date;
    summary: string;
    createdAt: Date;
    price: number;
    pointFidelity: number;
    idCategory: Object;
};

export type OrdersStatus = {
    id: number;
    label: string;
};
export type PaymentCart = {
    id: number; 
    label: string; 
    createdAt: Date;
};
export type User = {
    id: number; 
    username: string; 
    email: string; 
    password: string; 
    fisrtname: string; 
    lastname: string; 
    createdAt: Date; 
    idAddresses: Object; 
    idGenders: Object;
};