using System.Collections.Generic;

namespace SFF_Filmstudion.Models
{
    public class Film
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MaxNumberOfLoans { get; set; }
        public int NumberOfLoans { get; set; }
        public List<Loan> Loans { get; set; }
    }
}
