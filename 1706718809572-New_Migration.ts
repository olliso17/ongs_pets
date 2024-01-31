import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1706718809572 implements MigrationInterface {
    name = 'NewMigration1706718809572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "login" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "token" character varying(300) NOT NULL, "user_id" character varying(300) NOT NULL, "localhost" character varying(300) NOT NULL, CONSTRAINT "PK_0e29aa96b7d3fb812ff43fcfcd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "species" character varying(300) NOT NULL, "age" integer NOT NULL DEFAULT '0', "gender" character varying(300) NOT NULL, "description" character varying(300) NOT NULL DEFAULT '', "ong_id" character varying(300) NOT NULL, "image" character varying(300) NOT NULL DEFAULT '', "to_adopt" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_ee1c0043cc5b2a82f269803e5c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "donation_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "ong_id" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, CONSTRAINT "PK_0d58638937b441a45c421379810" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ong" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "cnpj" character varying(12) NOT NULL, "address" character varying(300) NOT NULL, "neighborhood" character varying(50) NOT NULL, "state" character varying(50) NOT NULL, "number_address" character varying(10) NOT NULL, "cep" character varying(15) NOT NULL, "user_id" character varying(300) NOT NULL, "telephone" character varying(300) NOT NULL, "maximum_pets" integer NOT NULL DEFAULT '0', "image" character varying(300) NOT NULL DEFAULT '', CONSTRAINT "PK_4d592833215da176127375d0bbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(300) NOT NULL, "email" character varying(300) NOT NULL, "password" character varying(300) NOT NULL, "image" character varying(300) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "ong"`);
        await queryRunner.query(`DROP TABLE "donation_entity"`);
        await queryRunner.query(`DROP TABLE "pet_entity"`);
        await queryRunner.query(`DROP TABLE "login"`);
    }

}
