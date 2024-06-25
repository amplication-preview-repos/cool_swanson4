import { VideoCreateNestedManyWithoutChannelsInput } from "./VideoCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  videos?: VideoCreateNestedManyWithoutChannelsInput;
};
