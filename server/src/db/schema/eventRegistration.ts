import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const eventRegistrations = pgTable("event_registrations", {
    id: varchar("id", { length: 255 }).primaryKey(),
    eventID: varchar("event_id", { length: 255 }).notNull(), // References event.id
    userID: varchar("user_id", { length: 255 }).notNull(), // References user.id
    teamID: varchar("team_id", { length: 255 }), // References team.id
    status: varchar("status", { length: 50 }).default("CONFIRMED").notNull(), // 'CONFIRMED' | 'PENDING_PAYMENT' | 'CANCELLED' | 'REJECTED'
    cancellationReason: text("cancellation_reason"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type EventRegistration = typeof eventRegistrations.$inferSelect;
export type NewEventRegistration = typeof eventRegistrations.$inferInsert;
