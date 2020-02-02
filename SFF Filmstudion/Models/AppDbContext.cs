using Microsoft.EntityFrameworkCore;

namespace SFF_Filmstudion.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Film> Films { get; set; }
        public DbSet<Filmstudio> Filmstudios { get; set; }
        public DbSet<Trivia> Trivias { get; set; }
        public DbSet<Loan> Loans { get; set; }
    }
}
