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
    public class EnterpCardsConversion
    {
        public static EnterpCardsDTO ConvertToDTO(EnterpCards EnterpCard)
        {
            EnterpCardsDTO newEnterpCard = new EnterpCardsDTO();
            newEnterpCard.C_id = EnterpCard.C_id;
            newEnterpCard.Cost = EnterpCard.Cost;
            newEnterpCard.EnterpId = EnterpCard.EnterpId;
            newEnterpCard.Type = EnterpCard.Type;
            newEnterpCard.Img = EnterpCard.Img;
            newEnterpCard.CountPoints = EnterpCard.CountPoints;
            newEnterpCard.Payment = EnterpCard.Payment;
            newEnterpCard.Duration = EnterpCard.Duration;
            newEnterpCard.FileName = EnterpCard.FileName;
            newEnterpCard.Lotery = LoteryConversion.ConvertToDTO(EnterpCard.Lotery.ToList());
            return newEnterpCard;
        }
        public static EnterpCards ConvertToEnterpCards(EnterpCardsDTO EnterpCardDTO)
        {

            EnterpCards newEnterpCard = new EnterpCards();
            newEnterpCard.Lotery = LoteryConversion.ConvertToLotery(EnterpCardDTO.Lotery);
            newEnterpCard.C_id = EnterpCardDTO.C_id;
            newEnterpCard.Cost = EnterpCardDTO.Cost;
            newEnterpCard.EnterpId = EnterpCardDTO.EnterpId;
            newEnterpCard.Type = EnterpCardDTO.Type;
            newEnterpCard.Img = EnterpCardDTO.Img;
            newEnterpCard.CountPoints = EnterpCardDTO.CountPoints;
            newEnterpCard.Payment = EnterpCardDTO.Payment;
            newEnterpCard.Duration = EnterpCardDTO.Duration;
            newEnterpCard.FileName = EnterpCardDTO.FileName;
            return newEnterpCard;
        }
    }
}
