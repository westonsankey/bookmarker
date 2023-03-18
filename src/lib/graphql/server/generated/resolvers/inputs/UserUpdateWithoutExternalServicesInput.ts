import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { BookmarkTagUpdateManyWithoutUserNestedInput } from "../inputs/BookmarkTagUpdateManyWithoutUserNestedInput";
import { BookmarkUpdateManyWithoutUsersNestedInput } from "../inputs/BookmarkUpdateManyWithoutUsersNestedInput";
import { CollectionUpdateManyWithoutUserNestedInput } from "../inputs/CollectionUpdateManyWithoutUserNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserTagInternalUpdateManyWithoutUserNestedInput } from "../inputs/UserTagInternalUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutExternalServicesInput", {
  isAbstract: true
})
export class UserUpdateWithoutExternalServicesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  bookmarks?: BookmarkUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => CollectionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  collections?: CollectionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserTagInternalUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  tags?: UserTagInternalUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkTagUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  BookmarkTag?: BookmarkTagUpdateManyWithoutUserNestedInput | undefined;
}
