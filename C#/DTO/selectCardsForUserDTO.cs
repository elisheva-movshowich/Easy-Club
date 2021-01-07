using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class selectCardsForUserDTO
    {
        public int ClubCard { get; set; }
        public Nullable<int> EnterpCardId { get; set; }
        public Nullable<int> Points { get; set; }
        public System.DateTime ExpireDate { get; set; }
        public Nullable<int> AppLoteryId { get; set; }
        public int EnterpCard { get; set; }
        public decimal Cost { get; set; }
        public Nullable<int> EnterpId { get; set; }
        public string Img { get; set; }
        public string Type { get; set; }
        public Nullable<int> Duration { get; set; }
        public int Enterprise { get; set; }
        public string Name { get; set; }
        public Nullable<bool> Active { get; set; }
        public string Url { get; set; }
    }
}
