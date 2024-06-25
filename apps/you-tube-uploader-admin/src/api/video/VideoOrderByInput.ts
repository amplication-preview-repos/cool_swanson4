import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  categoryId?: SortOrder;
  channelId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  privacyStatus?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  videoFile?: SortOrder;
};
