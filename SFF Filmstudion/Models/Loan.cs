using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SFF_Filmstudion.Models
{
    public class Loan
    {
        public int FilmId { get; set; }
        public Film Film { get; set; }
        public int FilmStudioId { get; set; }
        public Filmstudio Filmstudio { get; set; }
    }
}
