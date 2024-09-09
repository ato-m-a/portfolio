-- CreateTable
CREATE TABLE "skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "contents" TEXT[],

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "description" TEXT NOT NULL,
    "detail" JSON NOT NULL,

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "order_index" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "role" TEXT NOT NULL,
    "participants" INTEGER NOT NULL,
    "detail" JSON NOT NULL,
    "career_id" INTEGER NOT NULL,
    "pathname" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio" (
    "pathname" TEXT NOT NULL,
    "page_id" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("pathname")
);

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "FK_project_career_id" FOREIGN KEY ("career_id") REFERENCES "career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "FK_portfolio_pathname" FOREIGN KEY ("pathname") REFERENCES "portfolio"("pathname") ON DELETE SET NULL ON UPDATE CASCADE;
