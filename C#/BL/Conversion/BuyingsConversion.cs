using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL.Conversion
{
    /// <summary>
    /// covert from DAL to DTO and vise versa
    /// </summary>
    public class BuyingsConversion
    {
        public static BuyingsDTO ConvertToDTO(Buyings buyings)
        {
            BuyingsDTO newBuyings = new BuyingsDTO();
            newBuyings.C_id = buyings.C_id;
            newBuyings.BuyDate = buyings.BuyDate;
            newBuyings.ClubCardId = buyings.ClubCardId;
            newBuyings.Sum = buyings.Sum;
            return newBuyings;
        }
        public static Buyings ConvertToBuyings(BuyingsDTO buyingsDTO)
        {
            Buyings newBuyings = new Buyings();
            newBuyings.C_id = buyingsDTO.C_id;
            newBuyings.BuyDate = buyingsDTO.BuyDate;
            newBuyings.ClubCardId = buyingsDTO.ClubCardId;
            newBuyings.Sum = buyingsDTO.Sum;
            return newBuyings;


        }
    }
}
