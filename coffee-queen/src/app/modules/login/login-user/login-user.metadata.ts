export interface ILoginUser{
    email: string,
    password: string
}

export interface ILoginUsers{
  email: string,
  password: string,
  roles: IRoles
}

export interface IRoles{
  admin: boolean,
  cook: boolean,
  waiter:boolean
}
