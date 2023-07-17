import { ItemProps } from "@/types/types";
export const filterByTags = (data: any[], tagName: string) => {
  return data?.filter((el: ItemProps) => el.tags === tagName).reverse();
};

export const filterByTitle = (data: any[], basedIn: string) => {
  return data?.filter((el) => el.title === basedIn).reverse();
};

export const splitBy = (text: string, base: string) => {
  return text?.split(base);
};
