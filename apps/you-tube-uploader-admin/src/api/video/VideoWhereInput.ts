import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type VideoWhereInput = {
  category?: CategoryWhereUniqueInput;
  channel?: ChannelWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  privacyStatus?: "Option1";
  title?: StringNullableFilter;
  videoFile?: JsonFilter;
};
