using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class LoteryPlusCardDTO
    {
        public selectCardsForUserDTO Card { get; set; }
        public List<LoteryDTO> Lottery { get; set; }
    }
}
