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
    public class LoteryConversion
    {
        public static LoteryDTO ConvertToDTO(Lotery lotery)
        {
            LoteryDTO newLotery = new LoteryDTO();
            newLotery.C_id = lotery.C_id;
            newLotery.LoteryType = lotery.LoteryType;
            newLotery.ExpireDate = lotery.ExpireDate;
            newLotery.Sum = lotery.Sum;
            newLotery.SumType = lotery.SumType;
            newLotery.Num1 = lotery.Num1;
            newLotery.Num2 = lotery.Num2;
            newLotery.Addition = lotery.Addition;
            newLotery.EnterpCardId = lotery.EnterpCardId;
            newLotery.Expiration = lotery.Expiration;
            newLotery.Type = lotery.Type;
            return newLotery;
        }
        public static List<LoteryDTO> ConvertToDTO(List<Lotery> lotery)
        {
            List<LoteryDTO> newLotery = new List<LoteryDTO>();
            lotery.ForEach(x =>
            {
                newLotery.Add(ConvertToDTO(x));
            });
            return newLotery;
        }
        public static List<Lotery> ConvertToLotery(List<LoteryDTO> lotery)
        {
            List<Lotery> newLotery = new List<Lotery>();
            lotery.ForEach(x =>
            {
                newLotery.Add(ConvertToLotery(x));
            });
            return newLotery;
        }
        public static Lotery ConvertToLotery(LoteryDTO loteryDTO)
        {
            Lotery newLotery = new Lotery();
            newLotery.C_id = loteryDTO.C_id;
            newLotery.LoteryType = loteryDTO.LoteryType;
            newLotery.ExpireDate = loteryDTO.ExpireDate;
            newLotery.Sum = loteryDTO.Sum;
            newLotery.SumType = loteryDTO.SumType;
            newLotery.Num1 = loteryDTO.Num1;
            newLotery.Num2 = loteryDTO.Num2;
            newLotery.Addition = loteryDTO.Addition;
            newLotery.EnterpCardId = loteryDTO.EnterpCardId;
            newLotery.Expiration = loteryDTO.Expiration;
            newLotery.Type = loteryDTO.Type;
            return newLotery;
        }
    }
}
