import {
    boolean,
    integer,
    json,
    pgEnum,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const transactionTypeEnum = pgEnum("transaction_type", [
    "REGISTRATION",
    "MERCH",
    "EVENT",
]);

export const transactions = pgTable("transactions", {
    id: varchar("id", { length: 255 }).primaryKey(),
    amount: integer("amount"),
    userID: varchar("user_id", { length: 255 }).notNull(), // References user.id
    transactionID: varchar("transaction_id", { length: 255 }), // External transaction ID
    type: transactionTypeEnum("type").notNull(),
    timestamp: timestamp("timestamp").notNull().defaultNow(),
    festID: varchar("fest_id", { length: 255 }), // References fest.id
    comment: text("comment"),
    screenshot: text("screenshot"), // optional if payment gateway is used
    isVerified: boolean("is_verified").default(false), // if payment gateway is used
    status: varchar("status", { length: 50 }).default("PENDING").notNull(), // 'PENDING' | 'VERIFIED' | 'REJECTED' | 'FAILED'
    rejectionReason: text("rejection_reason"),
    reviewedBy: varchar("reviewed_by", { length: 255 }),
    reviewedAt: timestamp("reviewed_at"),
    paymentProvider: varchar("payment_provider", { length: 100 }).default("manual"),
    paymentOrderId: varchar("payment_order_id", { length: 255 }),
    metadata: json("metadata"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Transaction = typeof transactions.$inferSelect;
export type NewTransaction = typeof transactions.$inferInsert;
