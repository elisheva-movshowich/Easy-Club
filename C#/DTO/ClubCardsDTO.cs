using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ClubCardsDTO
    {
        public int C_id { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<int> EnterpCardId { get; set; }
        public Nullable<bool> StatusPriseForNew { get; set; }
        public Nullable<bool> StatusPriseForBirthDay { get; set; }
        public Nullable<int> Points { get; set; }
        public System.DateTime BuyDate { get; set; }
        public System.DateTime ExpireDate { get; set; }
        public Nullable<int> AppLoteryId { get; set; }
        public int Level { get; set; }
        public Nullable<bool> Payment { get; set; }
        public Nullable<bool> Issue { get; set; }
        public string PostalCode { get; set; }

    }
}
