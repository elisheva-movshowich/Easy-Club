using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UsersDTO
    {
        public int C_id { get; set; }
        public string Tz { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public Nullable<int> Level { get; set; }
        public System.DateTime BirthDate { get; set; }
    }
}
