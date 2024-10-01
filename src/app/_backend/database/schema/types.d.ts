import { productTable } from "./product.schema";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { orderTable } from "./sales-order.schema";

export type Product = InferSelectModel<typeof productTable>
export type NewProduct = InferInsertModel<typeof productTable>

export type NewSalesOrder = InferInsertModel<typeof orderTable>
export type SalesOrder = InferSelectModel<typeof orderTable>