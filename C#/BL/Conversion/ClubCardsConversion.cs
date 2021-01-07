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
    public class ClubCardsConversion
    {

        public static ClubCardsDTO ConvertToDTO(ClubCards ClubCard)
        {
            ClubCardsDTO newClubCard = new ClubCardsDTO();
            newClubCard.C_id = ClubCard.C_id;
            newClubCard.EnterpCardId = ClubCard.EnterpCardId;
            newClubCard.StatusPriseForBirthDay = ClubCard.StatusPriseForBirthDay;
            newClubCard.StatusPriseForNew = ClubCard.StatusPriseForNew;
            newClubCard.AppLoteryId = ClubCard.AppLoteryId;
            newClubCard.BuyDate = ClubCard.BuyDate;
            newClubCard.ExpireDate = ClubCard.ExpireDate;
            newClubCard.UserId = ClubCard.UserId;
            newClubCard.Level = ClubCard.Level;
            newClubCard.Points = ClubCard.Points;
            newClubCard.Issue = ClubCard.Issue;
            newClubCard.Payment = ClubCard.Payment;
            newClubCard.PostalCode = ClubCard.PostalCode;
            return newClubCard;
        }
        public static ClubCards ConvertToClubCards(ClubCardsDTO ClubCardDTO)
        {
            ClubCards newClubCard = new ClubCards();
            newClubCard.C_id = ClubCardDTO.C_id;
            newClubCard.EnterpCardId = ClubCardDTO.EnterpCardId;
            newClubCard.StatusPriseForBirthDay = ClubCardDTO.StatusPriseForBirthDay;
            newClubCard.StatusPriseForNew = ClubCardDTO.StatusPriseForNew;
            newClubCard.AppLoteryId = ClubCardDTO.AppLoteryId;
            newClubCard.BuyDate = ClubCardDTO.BuyDate;
            newClubCard.ExpireDate = ClubCardDTO.ExpireDate;
            newClubCard.UserId = ClubCardDTO.UserId;
            newClubCard.Level = ClubCardDTO.Level;
            newClubCard.Points = ClubCardDTO.Points;
            newClubCard.Issue = ClubCardDTO.Issue;
            newClubCard.Payment = ClubCardDTO.Payment;
            newClubCard.PostalCode = ClubCardDTO.PostalCode;
            return newClubCard;

        }
    }
}