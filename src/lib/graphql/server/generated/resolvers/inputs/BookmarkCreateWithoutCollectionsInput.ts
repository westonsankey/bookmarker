import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedManyWithoutBookmarkInput } from "../inputs/TagCreateNestedManyWithoutBookmarkInput";
import { UserCreateNestedOneWithoutBookmarksInput } from "../inputs/UserCreateNestedOneWithoutBookmarksInput";

@TypeGraphQL.InputType("BookmarkCreateWithoutCollectionsInput", {
  isAbstract: true
})
export class BookmarkCreateWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedManyWithoutBookmarkInput, {
    nullable: true
  })
  tags?: TagCreateNestedManyWithoutBookmarkInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookmarksInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutBookmarksInput;
}
