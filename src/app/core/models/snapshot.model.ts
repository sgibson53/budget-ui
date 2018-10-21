import { Category } from "./category.model";

export interface Snapshot {
  _id?: string;
  timestamp: Date;
  user_id: string;
  categories: Category[];
}
