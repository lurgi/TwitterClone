/*
  Warnings:

  - Added the required column `birth` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "birth" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("avatar", "createAt", "email", "id", "name", "phone", "updateAt") SELECT "avatar", "createAt", "email", "id", "name", "phone", "updateAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
