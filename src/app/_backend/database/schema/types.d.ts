import { productTable } from "./product.schema";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type Product = InferSelectModel<typeof productTable>
export type NewProduct = InferInsertModel<typeof productTable>