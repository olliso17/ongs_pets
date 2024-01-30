-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "number_address" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "maximum_pets" INTEGER NOT NULL,
    "image" TEXT,
    CONSTRAINT "Ong_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ong" ("active", "address", "cep", "cnpj", "created_at", "deleted_at", "id", "image", "maximum_pets", "name", "neighborhood", "number_address", "state", "telephone", "updated_at", "user_id") SELECT "active", "address", "cep", "cnpj", "created_at", "deleted_at", "id", "image", "maximum_pets", "name", "neighborhood", "number_address", "state", "telephone", "updated_at", "user_id" FROM "Ong";
DROP TABLE "Ong";
ALTER TABLE "new_Ong" RENAME TO "Ong";
CREATE UNIQUE INDEX "Ong_id_key" ON "Ong"("id");
CREATE UNIQUE INDEX "Ong_name_key" ON "Ong"("name");
CREATE UNIQUE INDEX "Ong_cnpj_key" ON "Ong"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
