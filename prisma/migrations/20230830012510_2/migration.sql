/*
  Warnings:

  - You are about to drop the column `url` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `link` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technologyId` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "url",
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "technologyId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
