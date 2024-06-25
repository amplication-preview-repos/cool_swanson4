import { StringFilter } from "../../util/StringFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type ChannelWhereInput = {
  id?: StringFilter;
  videos?: VideoListRelationFilter;
};
