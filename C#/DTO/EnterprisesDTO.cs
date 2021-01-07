using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class EnterprisesDTO
    {
        public int C_id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Password { get; set; }
        public Nullable<bool> Active { get; set; }
    }
}
