/*
  Warnings:

  - You are about to drop the column `userId` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `FormField` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fieldName` to the `FormField` table without a default value. This is not possible if the table is not empty.
  - Made the column `formId` on table `FormField` required. The migration will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" INTEGER NOT NULL
);
INSERT INTO "new_Form" ("id") SELECT "id" FROM "Form";
DROP TABLE "Form";
ALTER TABLE "new_Form" RENAME TO "Form";
CREATE TABLE "new_FormField" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fieldId" TEXT NOT NULL,
    "fieldName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT,
    "type" TEXT NOT NULL,
    "rows" INTEGER,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "formId" INTEGER NOT NULL,

    FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_FormField" ("id", "fieldId", "label", "value", "type", "required", "formId", "rows") SELECT "id", "fieldId", "label", "value", "type", "required", "formId", "rows" FROM "FormField";
DROP TABLE "FormField";
ALTER TABLE "new_FormField" RENAME TO "FormField";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
