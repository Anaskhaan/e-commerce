/*
  Warnings:

  - You are about to drop the column `created_at` on the `PendingOrder` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_contact1` on the `PendingOrder` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_contact2` on the `PendingOrder` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_name1` on the `PendingOrder` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_name2` on the `PendingOrder` table. All the data in the column will be lost.
  - You are about to drop the column `payment_intent_id` on the `PendingOrder` table. All the data in the column will be lost.
  - You are about to drop the column `total_amount` on the `PendingOrder` table. All the data in the column will be lost.
  - Added the required column `totalAmount` to the `PendingOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PendingOrder" DROP COLUMN "created_at",
DROP COLUMN "emergency_contact1",
DROP COLUMN "emergency_contact2",
DROP COLUMN "emergency_name1",
DROP COLUMN "emergency_name2",
DROP COLUMN "payment_intent_id",
DROP COLUMN "total_amount",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emergencyContact1" TEXT,
ADD COLUMN     "emergencyContact2" TEXT,
ADD COLUMN     "emergencyName1" TEXT,
ADD COLUMN     "emergencyName2" TEXT,
ADD COLUMN     "paymentIntentId" TEXT,
ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL;
