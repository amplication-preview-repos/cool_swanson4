/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoCreateNestedManyWithoutChannelsInput } from "./VideoCreateNestedManyWithoutChannelsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChannelCreateInput {
  @ApiProperty({
    required: false,
    type: () => VideoCreateNestedManyWithoutChannelsInput,
  })
  @ValidateNested()
  @Type(() => VideoCreateNestedManyWithoutChannelsInput)
  @IsOptional()
  @Field(() => VideoCreateNestedManyWithoutChannelsInput, {
    nullable: true,
  })
  videos?: VideoCreateNestedManyWithoutChannelsInput;
}

export { ChannelCreateInput as ChannelCreateInput };
