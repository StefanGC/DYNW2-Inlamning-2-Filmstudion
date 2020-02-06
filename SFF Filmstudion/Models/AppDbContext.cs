using Microsoft.EntityFrameworkCore;
using SFF_Filmstudion.Models;

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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<Loan>()
                .HasKey(t => new { t.FilmId, t.FilmStudioId });

            modelBuilder.Entity<Loan>()
                .HasOne(pt => pt.Film)
                .WithMany(p => p.Loans)
                .HasForeignKey(pt => pt.FilmId);

            modelBuilder.Entity<Loan>()
                .HasOne(pt => pt.Filmstudio)
                .WithMany(t => t.Loans)
                .HasForeignKey(pt => pt.FilmStudioId);
                
        }        
    }
}
