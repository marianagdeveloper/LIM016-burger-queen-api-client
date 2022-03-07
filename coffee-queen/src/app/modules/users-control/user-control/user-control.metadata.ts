export interface User{
_id:string,
email: string,
password:string,
nameUser: string,
roles: IRoles,
image: string
}

export interface IRoles{
admin: boolean,
cook: boolean,
waiter:boolean
}

