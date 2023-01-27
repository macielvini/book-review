export type ReviewEntity = {
  id: number;
  bookId: number;
  userId: number;
  comment: string;
  rating: number;
};

export type Review = Omit<ReviewEntity, "id">;
