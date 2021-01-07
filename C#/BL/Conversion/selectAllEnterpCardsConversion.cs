using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Conversion
{
   public class selectAllEnterpCardsConversion
    {
        public static selectAllEnterpCardsDTO ConvertToDTO(selectAllEnterpCards_Result4 allCards)
        {
            selectAllEnterpCardsDTO allCardsDTO = new selectAllEnterpCardsDTO();
            allCardsDTO.C_id = allCards.C_id;
            allCardsDTO.EnterpId = allCards.EnterpId;
            allCardsDTO.Name = allCards.Name;
            allCardsDTO.Url = allCards.Url;
            allCardsDTO.Img = allCards.Img;
            allCardsDTO.Cost = allCards.Cost;
            allCardsDTO.CountPoints = allCards.CountPoints;
            allCardsDTO.CardId = allCards.CardId;
            allCardsDTO.Payment = allCards.Payment;
            allCardsDTO.Type = allCards.Type;
            allCardsDTO.Duration = allCards.Duration;
            return allCardsDTO;
        }
        public static selectAllEnterpCards_Result4 ConvertToBuyings(selectAllEnterpCardsDTO allCardsDTO)
        {
            selectAllEnterpCards_Result4 allCards = new selectAllEnterpCards_Result4();
            allCards.C_id = allCardsDTO.C_id;
            allCards.EnterpId = allCardsDTO.EnterpId;
            allCards.Name = allCardsDTO.Name;
            allCards.Url = allCardsDTO.Url;
            allCards.Img = allCardsDTO.Img;
            allCards.Cost = allCardsDTO.Cost;
            allCards.CountPoints = allCardsDTO.CountPoints;
            allCards.CardId = allCardsDTO.CardId;
            allCards.Payment = allCardsDTO.Payment;
            allCards.Type = allCardsDTO.Type;
            allCards.Duration = allCardsDTO.Duration;
            return allCards;


        }
    }
}
