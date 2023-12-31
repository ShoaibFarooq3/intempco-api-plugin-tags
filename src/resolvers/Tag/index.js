import { encodeTagOpaqueId } from "../../xforms/id.js";
import heroMediaUrl from "./heroMediaUrl.js";
import subTags from "./subTags.js";
import productCount from "./productCount.js";

export default {
  _id: (tag) => encodeTagOpaqueId(tag._id),
  heroMediaUrl,
  subTagIds: (tag) => (tag.relatedTagIds || []).map(encodeTagOpaqueId),
  subTags,
  productCount
};
