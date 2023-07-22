export enum Gender {
  Female = 'female',
  Male = 'male',
}
export interface Name {
  title: Title
  first: string
  last: string
}
export enum Title {
  MS = 'Ms',
  Mr = 'Mr',
  Mrs = 'Mrs',
}
export interface Picture {
  large: string
  medium: string
  thumbnail: string
}
export interface User {
  gender: Gender
  name: Name
  location: Location
  email: string
  phone: string
  cell: string
  id: ID
  picture: Picture
  login: Login

}
export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}
export interface ID {
  name: string
  value: null | string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number | string
  coordinates: Coordinates
  timezone: Timezone
}
export interface Street {
  number: number
  name: string
}
