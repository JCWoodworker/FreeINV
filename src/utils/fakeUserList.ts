interface FakeUser {
  name: string
  username: string
  password: string
  avatar: string
  id: string
  isPresent: boolean
}
export const fakeUserList: FakeUser[] = [
  {
    name: "Fake User 01",
    username: "Faker01",
    password: "password",
    avatar: "https://i.pravatar.cc/300",
    id: "Faker01",
    isPresent: true,
  },
  {
    name: "Fake User 02",
    username: "Faker02",
    password: "password",
    avatar: "https://i.pravatar.cc/300",
    id: "Faker02",
    isPresent: true,
  },
  {
    name: "Fake User 03",
    username: "Faker03",
    password: "password",
    avatar: "https://i.pravatar.cc/300",
    id: "Faker03",
    isPresent: true,
  },
]