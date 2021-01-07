using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SendMailDTO
    {
        public int C_id { get; set; }
        public Nullable<int> GetterId { get; set; }
        public Nullable<bool> Status { get; set; }
        public string Key { get; set; }
        public Nullable<System.DateTime> SendDate { get; set; }
    }
}
