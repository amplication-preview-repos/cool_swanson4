import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type VideoUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  channel?: ChannelWhereUniqueInput | null;
  description?: string | null;
  privacyStatus?: "Option1" | null;
  tags?: Array<"Option1">;
  title?: string | null;
  videoFile?: InputJsonValue;
};
