-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "inside";

-- CreateTable
CREATE TABLE "inside"."users_surveys_responses_aux" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "response_status_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_surveys_responses_aux_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_surveys_responses_aux_origin_idx" ON "inside"."users_surveys_responses_aux"("origin");

-- CreateIndex
CREATE INDEX "users_surveys_responses_aux_response_status_id_idx" ON "inside"."users_surveys_responses_aux"("response_status_id");

-- CreateIndex
CREATE INDEX "users_surveys_responses_aux_origin_response_status_id_idx" ON "inside"."users_surveys_responses_aux"("origin", "response_status_id");
