import { ItemProps } from "@/types/types";
const useFilterByTagsByTags = (data: any[], tagName: string) => {
  return data?.filter((el: ItemProps) => el.tags === tagName).reverse();
};

export default useFilterByTagsByTags;
