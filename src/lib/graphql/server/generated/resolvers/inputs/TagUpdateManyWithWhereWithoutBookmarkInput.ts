import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyMutationInput } from "../inputs/TagUpdateManyMutationInput";

@TypeGraphQL.InputType("TagUpdateManyWithWhereWithoutBookmarkInput", {
  isAbstract: true
})
export class TagUpdateManyWithWhereWithoutBookmarkInput {
  @TypeGraphQL.Field(_type => TagScalarWhereInput, {
    nullable: false
  })
  where!: TagScalarWhereInput;

  @TypeGraphQL.Field(_type => TagUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagUpdateManyMutationInput;
}
