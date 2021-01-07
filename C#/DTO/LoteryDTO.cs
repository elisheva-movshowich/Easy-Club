using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LoteryDTO
    {
        public int C_id { get; set; }
        public Nullable<int> EnterpCardId { get; set; }
        public string LoteryType { get; set; }
        public Nullable<int> Sum { get; set; }
        public string SumType { get; set; }
        public Nullable<int> Num1 { get; set; }
        public Nullable<int> Num2 { get; set; }
        public string Addition { get; set; }
        public Nullable<int> Expiration { get; set; }
        public Nullable<int> Type { get; set; }
        public Nullable<System.DateTime> ExpireDate { get; set; }


    }
}
