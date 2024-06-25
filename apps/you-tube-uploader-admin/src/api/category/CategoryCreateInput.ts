import { VideoCreateNestedManyWithoutCategoriesInput } from "./VideoCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  videos?: VideoCreateNestedManyWithoutCategoriesInput;
};
