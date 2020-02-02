using Microsoft.EntityFrameworkCore.Migrations;

namespace SFF_Filmstudion.Migrations
{
    public partial class Migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FilmstudioId",
                table: "Films",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Filmstudios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Filmstudios", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Films_FilmstudioId",
                table: "Films",
                column: "FilmstudioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Films_Filmstudios_FilmstudioId",
                table: "Films",
                column: "FilmstudioId",
                principalTable: "Filmstudios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Films_Filmstudios_FilmstudioId",
                table: "Films");

            migrationBuilder.DropTable(
                name: "Filmstudios");

            migrationBuilder.DropIndex(
                name: "IX_Films_FilmstudioId",
                table: "Films");

            migrationBuilder.DropColumn(
                name: "FilmstudioId",
                table: "Films");
        }
    }
}
