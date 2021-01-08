-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "pin" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "Form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "requested" BOOLEAN NOT NULL DEFAULT false,
    "ownerId" INTEGER NOT NULL,

    FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FormField" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fieldId" TEXT NOT NULL,
    "fieldName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT,
    "type" TEXT NOT NULL,
    "rows" INTEGER,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "checked" BOOLEAN DEFAULT false,
    "formId" INTEGER NOT NULL,

    FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
