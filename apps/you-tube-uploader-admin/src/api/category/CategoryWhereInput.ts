import { StringFilter } from "../../util/StringFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  videos?: VideoListRelationFilter;
};
