import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const teamInvitations = pgTable("team_invitations", {
    id: varchar("id", { length: 255 }).primaryKey(),
    teamID: varchar("team_id", { length: 255 }).notNull(), // References team.id
    userID: varchar("user_id", { length: 255 }).notNull(), // Target user id
    invitedBy: varchar("invited_by", { length: 255 }).notNull(), // User who initiated (lead or requester)
    type: varchar("type", { length: 50 }).notNull(), // 'INVITATION' | 'JOIN_REQUEST'
    status: varchar("status", { length: 50 }).default("PENDING").notNull(), // 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED'
    message: text("message"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type TeamInvitation = typeof teamInvitations.$inferSelect;
export type NewTeamInvitation = typeof teamInvitations.$inferInsert;
