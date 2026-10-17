CREATE TABLE "team_invitations" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"team_id" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"invited_by" varchar(255) NOT NULL,
	"type" varchar(50) NOT NULL,
	"status" varchar(50) DEFAULT 'PENDING' NOT NULL,
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "status" varchar(50) DEFAULT 'PENDING' NOT NULL;--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "rejection_reason" text;--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "reviewed_by" varchar(255);--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "reviewed_at" timestamp;--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "payment_provider" varchar(100) DEFAULT 'manual';--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "payment_order_id" varchar(255);--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "metadata" json;--> statement-breakpoint
ALTER TABLE "event_registrations" ADD COLUMN "status" varchar(50) DEFAULT 'CONFIRMED' NOT NULL;--> statement-breakpoint
ALTER TABLE "event_registrations" ADD COLUMN "cancellation_reason" text;