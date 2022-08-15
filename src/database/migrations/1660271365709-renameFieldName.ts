import { MigrationInterface, QueryRunner } from "typeorm";

export class renameFieldName1660271365709 implements MigrationInterface {
    name = 'renameFieldName1660271365709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_51b8b26ac168fbe7d6f5653e6c\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`name\` \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`userName\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_226bb9aa7aa8a69991209d58f5\` (\`userName\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_226bb9aa7aa8a69991209d58f5\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`userName\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`userName\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_51b8b26ac168fbe7d6f5653e6c\` ON \`users\` (\`name\`)`);
    }

}
