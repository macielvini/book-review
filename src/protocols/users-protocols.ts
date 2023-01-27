export type UserEntity = {
  id: number;
  name: string;
  image: string;
};

export type User = Omit<UserEntity, "id">;
