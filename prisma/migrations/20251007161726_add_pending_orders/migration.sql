-- CreateTable
CREATE TABLE "PendingOrder" (
    "id" SERIAL NOT NULL,
    "payment_intent_id" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "emergency_name1" TEXT,
    "emergency_contact1" TEXT,
    "emergency_name2" TEXT,
    "emergency_contact2" TEXT,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PendingOrder_pkey" PRIMARY KEY ("id")
);
