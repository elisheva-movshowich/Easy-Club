using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BL.Conversion
{
    public class selectCardsForUserConversion
    {
        public static selectCardsForUserDTO ConvertToDTO(selectCardsForUser_Result1 selectCardsForUser)
        {
            selectCardsForUserDTO newSelectCardsForUser = new selectCardsForUserDTO();
            newSelectCardsForUser.ClubCard = selectCardsForUser.ClubCard;
            newSelectCardsForUser.EnterpCardId = selectCardsForUser.EnterpCardId;
            newSelectCardsForUser.EnterpId = selectCardsForUser.EnterpId;
            newSelectCardsForUser.Active = selectCardsForUser.Active;
            newSelectCardsForUser.Cost = selectCardsForUser.Cost;
            newSelectCardsForUser.ExpireDate = selectCardsForUser.ExpireDate;
            newSelectCardsForUser.Url = selectCardsForUser.Url;
            newSelectCardsForUser.Type = selectCardsForUser.Type;
            newSelectCardsForUser.Points = selectCardsForUser.Points;
            newSelectCardsForUser.Img = selectCardsForUser.Img;
            newSelectCardsForUser.AppLoteryId = selectCardsForUser.AppLoteryId;
            newSelectCardsForUser.Duration = selectCardsForUser.Duration;
            newSelectCardsForUser.Name = selectCardsForUser.Name;
            newSelectCardsForUser.Enterprise = selectCardsForUser.Enterprise;
            newSelectCardsForUser.EnterpCard = selectCardsForUser.EnterpCard;
            return newSelectCardsForUser;
        }
        public static selectCardsForUser_Result1 ConvertToSelectCardsForUser_Result(selectCardsForUserDTO selectCardsForUserDTO)
        {
            selectCardsForUser_Result1 newSelectCardsForUser = new selectCardsForUser_Result1();
            newSelectCardsForUser.ClubCard = selectCardsForUserDTO.ClubCard;
            newSelectCardsForUser.EnterpCardId = selectCardsForUserDTO.EnterpCardId;
            newSelectCardsForUser.EnterpId = selectCardsForUserDTO.EnterpId;
            newSelectCardsForUser.Active = selectCardsForUserDTO.Active;
            newSelectCardsForUser.Cost = selectCardsForUserDTO.Cost;
            newSelectCardsForUser.ExpireDate = selectCardsForUserDTO.ExpireDate;
            newSelectCardsForUser.Url = selectCardsForUserDTO.Url;
            newSelectCardsForUser.Type = selectCardsForUserDTO.Type;
            newSelectCardsForUser.Points = selectCardsForUserDTO.Points;
            newSelectCardsForUser.Img = selectCardsForUserDTO.Img;
            newSelectCardsForUser.Duration = selectCardsForUserDTO.Duration;
            newSelectCardsForUser.Name = selectCardsForUserDTO.Name;
            newSelectCardsForUser.Enterprise = selectCardsForUserDTO.Enterprise;
            newSelectCardsForUser.EnterpCard = selectCardsForUserDTO.EnterpCard;
            return newSelectCardsForUser;
        }
    }
}

