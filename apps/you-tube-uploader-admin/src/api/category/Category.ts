import { Video } from "../video/Video";

export type Category = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  videos?: Array<Video>;
};
