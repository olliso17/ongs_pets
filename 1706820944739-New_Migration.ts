import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1706820944739 implements MigrationInterface {
    name = 'NewMigration1706820944739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "login" DROP CONSTRAINT "FK_6da2fec3d330c1b6c67c427937e"`);
        await queryRunner.query(`ALTER TABLE "login" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "donation" DROP CONSTRAINT "FK_db3b835dde3500c03a4481721d5"`);
        await queryRunner.query(`ALTER TABLE "donation" ALTER COLUMN "ong_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64fd7f710c36160186da0deb464"`);
        await queryRunner.query(`ALTER TABLE "pet" ALTER COLUMN "ong_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "FK_d2fdee1a544ac67c0978388797e"`);
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "UQ_7e923e645ccf96376b237927821"`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "cnpj" character varying(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "UQ_7e923e645ccf96376b237927821" UNIQUE ("cnpj")`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "neighborhood" character varying(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "state" character varying(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "number_address"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "number_address" character varying(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "cep" character varying(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "login" ADD CONSTRAINT "FK_6da2fec3d330c1b6c67c427937e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donation" ADD CONSTRAINT "FK_db3b835dde3500c03a4481721d5" FOREIGN KEY ("ong_id") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64fd7f710c36160186da0deb464" FOREIGN KEY ("ong_id") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "FK_d2fdee1a544ac67c0978388797e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "FK_d2fdee1a544ac67c0978388797e"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64fd7f710c36160186da0deb464"`);
        await queryRunner.query(`ALTER TABLE "donation" DROP CONSTRAINT "FK_db3b835dde3500c03a4481721d5"`);
        await queryRunner.query(`ALTER TABLE "login" DROP CONSTRAINT "FK_6da2fec3d330c1b6c67c427937e"`);
        await queryRunner.query(`ALTER TABLE "ong" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "cep" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "number_address"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "number_address" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "state" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "neighborhood" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "UQ_7e923e645ccf96376b237927821"`);
        await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "ong" ADD "cnpj" character varying(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "UQ_7e923e645ccf96376b237927821" UNIQUE ("cnpj")`);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "FK_d2fdee1a544ac67c0978388797e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ALTER COLUMN "ong_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64fd7f710c36160186da0deb464" FOREIGN KEY ("ong_id") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donation" ALTER COLUMN "ong_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "donation" ADD CONSTRAINT "FK_db3b835dde3500c03a4481721d5" FOREIGN KEY ("ong_id") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "login" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "login" ADD CONSTRAINT "FK_6da2fec3d330c1b6c67c427937e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
