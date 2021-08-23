import { Colors } from "./../../types";
import { TagType } from ".";

export const tagTypeToColor = (tagType: TagType): Colors => {
  switch (tagType) {
    case "feeling":
      return "secondary";
    case "where":
      return "warning";
    case "withWho":
      return "info";

    default:
      throw new Error(`No implementation for type - ${tagType}`);
  }
};
