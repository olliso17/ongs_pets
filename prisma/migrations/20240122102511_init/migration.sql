-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "image" TEXT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "number_address" INTEGER NOT NULL,
    "cep" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "maximum_pets" INTEGER NOT NULL,
    "image" TEXT,
    CONSTRAINT "Ong_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Login" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL,
    "localhost" TEXT NOT NULL,
    CONSTRAINT "Login_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "description" TEXT,
    "ong_id" TEXT NOT NULL,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "to_adopt" BOOLEAN NOT NULL,
    CONSTRAINT "Pet_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "ong_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    CONSTRAINT "Donation_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_id_key" ON "Ong"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_name_key" ON "Ong"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_cnpj_key" ON "Ong"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Login_id_key" ON "Login"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_id_key" ON "Pet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_id_key" ON "Donation"("id");
