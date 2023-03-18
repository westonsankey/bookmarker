import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserTagInternalScalarWhereInput } from "../inputs/UserTagInternalScalarWhereInput";
import { UserTagInternalUpdateManyMutationInput } from "../inputs/UserTagInternalUpdateManyMutationInput";

@TypeGraphQL.InputType("UserTagInternalUpdateManyWithWhereWithoutTagInput", {
  isAbstract: true
})
export class UserTagInternalUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => UserTagInternalScalarWhereInput, {
    nullable: false
  })
  where!: UserTagInternalScalarWhereInput;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserTagInternalUpdateManyMutationInput;
}
