import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration.1706660525940 implements MigrationInterface {
    name = 'NewMigration.1706660525940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "login" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "_active" boolean NOT NULL DEFAULT true, "_created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "token" character varying(300) NOT NULL, "user_id" character varying(300) NOT NULL, "localhost" character varying(300) NOT NULL, CONSTRAINT "PK_6eb5b234f7b311115f5b0e0db50" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "pet_entity" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "_active" boolean NOT NULL DEFAULT true, "_created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "species" character varying(300) NOT NULL, "age" integer NOT NULL DEFAULT '0', "gender" character varying(300) NOT NULL, "description" character varying(300) NOT NULL DEFAULT '', "ong_id" character varying(300) NOT NULL, "image" character varying(300) NOT NULL DEFAULT '', "to_adopt" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_82704be5a63fd34bb5bc0a2fcbc" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "ong" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "_active" boolean NOT NULL DEFAULT true, "_created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "cnpj" character varying(12) NOT NULL, "address" character varying(300) NOT NULL, "neighborhood" character varying(50) NOT NULL, "state" character varying(50) NOT NULL, "number_address" character varying(10) NOT NULL, "cep" character varying(15) NOT NULL, "user_id" character varying(300) NOT NULL, "telephone" character varying(300) NOT NULL, "maximum_pets" integer NOT NULL DEFAULT '0', "image" character varying(300) NOT NULL DEFAULT '', CONSTRAINT "PK_48d385762f0f2003aa65d38c418" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "_active" boolean NOT NULL DEFAULT true, "_created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "email" character varying(300) NOT NULL, "password" character varying(300) NOT NULL, "image" character varying(300) NOT NULL, CONSTRAINT "PK_457bfa3e35350a716846b03102d" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "donation_entity" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "_active" boolean NOT NULL DEFAULT true, "_created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "_deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "ong_id" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, CONSTRAINT "PK_93e44777b4666b319be8947fc7e" PRIMARY KEY ("_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "donation_entity"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "ong"`);
        await queryRunner.query(`DROP TABLE "pet_entity"`);
        await queryRunner.query(`DROP TABLE "login"`);
    }

}
