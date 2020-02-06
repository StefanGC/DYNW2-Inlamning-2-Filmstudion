using System.Collections.Generic;

namespace SFF_Filmstudion.Models
{
    public class Filmstudio
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Films { get; set; }
        public List<Loan> Loans { get; set; }
    }
}
