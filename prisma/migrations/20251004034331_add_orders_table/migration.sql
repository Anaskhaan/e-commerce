/*
  Warnings:

  - You are about to drop the column `productName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `productPlan` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `productPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `product` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "productName",
DROP COLUMN "productPlan",
DROP COLUMN "productPrice",
ADD COLUMN     "product" JSONB NOT NULL;
