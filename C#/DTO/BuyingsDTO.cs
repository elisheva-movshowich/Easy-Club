using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class BuyingsDTO
    {
        public int C_id { get; set; }
        public Nullable<int> ClubCardId { get; set; }
        public System.DateTime BuyDate { get; set; }
        public Nullable<decimal> Sum { get; set; }

    }
}
