export interface ILoginUser{
    email: string,
    password: string
}

export interface ILoginUsers{
  email: string,
  name: string,
  roles: IRoles,
  avatar: string
}

export interface IRoles{
  admin: boolean,
  cook: boolean,
  waiter:boolean
}
