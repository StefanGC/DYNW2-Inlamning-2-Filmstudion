using System.Collections.Generic;

namespace SFF_Filmstudion.Models
{
    public class Filmstudio
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public List<Film> Films { get; set; }
    }
}
