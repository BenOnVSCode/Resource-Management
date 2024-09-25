/*
  Warnings:

  - The primary key for the `Resource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Resource` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Resource_userId_idx";

-- AlterTable
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_pkey",
DROP COLUMN "category",
DROP COLUMN "createdTime",
DROP COLUMN "link",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Resource_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Resource_id_seq";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
