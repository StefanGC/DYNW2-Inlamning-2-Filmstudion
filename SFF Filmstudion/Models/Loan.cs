using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SFF_Filmstudion.Models
{
    public class Loan
    {
        public int Id { get; set; }
        public int FilmId { get; set; }
        public int FilmStudioId { get; set; }
    }
}
