-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "font_color" TEXT NOT NULL,
    "background_color" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_tag" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "project_tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_label_key" ON "tag"("label");

-- CreateIndex
CREATE INDEX "idx_tag_label" ON "tag"("label");

-- AddForeignKey
ALTER TABLE "project_tag" ADD CONSTRAINT "FK_project_id" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_tag" ADD CONSTRAINT "FK_tag_id" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
