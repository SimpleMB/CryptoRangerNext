-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormField" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fieldId" TEXT NOT NULL,
    "fieldName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT,
    "type" TEXT NOT NULL,
    "rows" INTEGER,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "formId" INTEGER,

    FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_FormField" ("id", "fieldId", "fieldName", "label", "value", "type", "rows", "required", "formId") SELECT "id", "fieldId", "fieldName", "label", "value", "type", "rows", "required", "formId" FROM "FormField";
DROP TABLE "FormField";
ALTER TABLE "new_FormField" RENAME TO "FormField";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
