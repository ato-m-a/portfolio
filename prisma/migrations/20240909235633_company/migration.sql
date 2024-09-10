-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "address" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);
