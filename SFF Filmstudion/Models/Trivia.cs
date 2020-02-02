using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SFF_Filmstudion.Models
{
    public class Trivia
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public int FilmstudioId { get; set; }
        public int FilmId { get; set; }
    }
}
