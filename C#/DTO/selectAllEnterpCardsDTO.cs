using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class selectAllEnterpCardsDTO
    {
        public Nullable<int> Duration { get; set; }
        public decimal Cost { get; set; }
        public int CardId { get; set; }
        public Nullable<int> CountPoints { get; set; }
        public string Img { get; set; }
        public Nullable<int> EnterpId { get; set; }
        public Nullable<bool> Payment { get; set; }
        public string Type { get; set; }
        public int C_id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
    }
}
