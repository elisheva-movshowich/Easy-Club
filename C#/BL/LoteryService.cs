using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
    public class LoteryService
    {

        ///// <summary>
        //// מקבלת כרטיס מועדון ומחזירה רשימה של כל המבצעים בכרטיס הזה
        ///// </summary>
        ///// <param name="clubCard"></param>
        ///// <returns></returns>
        //public static List<LoteryDTO> ViewLoteryForCard(ClubCards clubCard)
        //{
        //    List<LoteryDTO> loteriesDTO = new List<LoteryDTO>();
        //    using (ClubCardsEntities db = new ClubCardsEntities())
        //    {
        //        if (clubCard.StatusPriseForNew == true)
        //            loteriesDTO.Add(Conversion.LoteryConversion.ConvertToDTO(db.Lotery.FirstOrDefault(y => y.C_id == (db.EnterpCards.FirstOrDefault(x => x.C_id == clubCard.EnterpCardId).PriseForNewId))));
        //        if (clubCard.StatusPriseForBirthDay == true)
        //            loteriesDTO.Add(Conversion.LoteryConversion.ConvertToDTO(db.Lotery.FirstOrDefault(y => y.C_id == (db.EnterpCards.FirstOrDefault(x => x.C_id == clubCard.EnterpCardId).PriseForBirthDayId))));
        //        db.Lotery.ToList().ForEach(x =>
        //        {
        //            if (x.EnterpCardId == clubCard.EnterpCardId)
        //                loteriesDTO.Add(Conversion.LoteryConversion.ConvertToDTO(x));
        //        });
        //        loteriesDTO.Add(Conversion.LoteryConversion.ConvertToDTO(db.Lotery.FirstOrDefault(x => x.C_id == clubCard.AppLoteryId)));
        //    }
        //    return loteriesDTO;
        //}
        public static bool AddLottery(LoteryDTO lotery)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                try
                {
                    db.Lotery.Add(Conversion.LoteryConversion.ConvertToLotery(lotery));
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
        public static bool DeleteLotery(EnterpCardsDTO data)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                List<Lotery> lotery = db.Lotery.Where(x => x.EnterpCardId == data.C_id).ToList();
                foreach (var item in lotery)
                {
                    try
                    {
                        db.Lotery.Remove(item);
                        db.SaveChanges();
                    }
                    catch
                    {
                        return false;
                    }
                }
                return true;
            }
        }
        public static List<LoteryDTO> selectLotteriesForCard(selectCardsForUserDTO clubCard, UsersDTO user)
        {
            List<LoteryDTO> lottery = new List<LoteryDTO>();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.Lotery.Where(x => x.EnterpCardId == clubCard.EnterpCardId).ToList().ForEach(x =>
                {
                    var check = false;
                    if (x.Expiration != null && clubCard.ExpireDate!=null && clubCard.Duration != null)
                    {
                        DateTime buyDate = new DateTime(clubCard.ExpireDate.Year - (int)clubCard.Duration, clubCard.ExpireDate.Month, clubCard.ExpireDate.Day);
                        if (x.Expiration >= 12)
                        {
                            if (DateTime.Now.Year - buyDate.Year <= x.Expiration / 12)
                                check = true;
                            else
                                check = false;
                        }
                        else
                        {
                            if (DateTime.Now.Year == buyDate.Year && DateTime.Now.Month - buyDate.Month <= x.Expiration)
                                check = true;
                        }
                    }
                    if (x.Type == 1 && (x.Expiration == null || check == true))
                        lottery.Add(Conversion.LoteryConversion.ConvertToDTO(x));
                    else
                        if (x.Type == 2 && DateTime.Now.Month == user.BirthDate.Month)
                        lottery.Add(Conversion.LoteryConversion.ConvertToDTO(x));
                    else
                        if (x.Type == 3 && (x.ExpireDate == null || x.ExpireDate >= DateTime.Now))
                        lottery.Add(Conversion.LoteryConversion.ConvertToDTO(x));
                });
            }
            return lottery;
        }
    }
}
