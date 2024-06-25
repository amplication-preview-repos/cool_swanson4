import { Category } from "../category/Category";
import { Channel } from "../channel/Channel";
import { JsonValue } from "type-fest";

export type Video = {
  category?: Category | null;
  channel?: Channel | null;
  createdAt: Date;
  description: string | null;
  id: string;
  privacyStatus?: "Option1" | null;
  tags?: Array<"Option1">;
  title: string | null;
  updatedAt: Date;
  videoFile: JsonValue;
};
