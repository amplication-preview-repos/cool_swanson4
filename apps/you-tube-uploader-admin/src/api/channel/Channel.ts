import { Video } from "../video/Video";

export type Channel = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  videos?: Array<Video>;
};
