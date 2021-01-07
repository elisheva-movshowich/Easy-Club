using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BL
{

    /// <summary>
    /// מקבלת ת.ז. של לקוח ומחזירה רשימת כרטיסי מועדון השיכים ללקוח הזה
    /// </summary> 
    public class ClubCardsService
    {
        //public static List<MyCardDTO> ViewCards(int id)
        //{
        //    List<MyCardDTO> MyCardsDTO = new List<MyCardDTO>();
        //    using (ClubCardsEntities db = new ClubCardsEntities())
        //    {
        //        List<MyCardDTO> myCards = new List<MyCardDTO>();

        //        db.ClubCards.ToList().ForEach(x =>
        //        {
        //            if (x.UserId == id)
        //            {
        //                MyCardDTO myCard = new MyCardDTO();
        //                myCard.Points = x.Points;
        //                myCard.ExpireDate = x.ExpireDate;
        //                EnterpCards enterpCard = db.EnterpCards.First(y => y.C_id == x.EnterpCardId);
        //                myCard.Img = enterpCard.Img;
        //                myCard.Type = enterpCard.Type;
        //                Enterprises enterprise = db.Enterprises.First(z => z.C_id == enterpCard.EnterpId);
        //                myCard.Name = enterprise.Name;
        //                myCard.loteries = LoteryService.ViewLoteryForCard(x);
        //                myCards.Add(myCard);
        //            }
        //        });
        //        return myCards;

        //    }
        //}
        public static ClubCardsDTO ViewCard(int id)
        {

            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                ClubCards card = db.ClubCards.FirstOrDefault(x => x.C_id == id);
                return card != null ? Conversion.ClubCardsConversion.ConvertToDTO(card) : null;


            }
        }
        /// <summary>
        /// מקבלת קוד כרטיס של עסק ות.ז. של לקוח ובודקת האם קים ללקוח הזה כרטיס מועדון הזהה לכרטיס שהתקבל
        /// </summary>
        /// <param name="enterpCardId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public static bool IsClubCardExist(int enterpCardId, int userId)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.ClubCards.FirstOrDefault(x => x.EnterpCardId == enterpCardId && x.UserId == userId) != null)
                    return true;
                return false;
            }
        }
        /// <summary>
        /// מקבלת קוד עסק ומחזירה רשימה של כל פרטי הכרטיסים של לקוחות העסק
        /// </summary>
        /// <param name="enterpId"></param>
        /// <returns></returns>
        public static List<ClubCardsDTO> GetClubCards(int enterpId)
        {
            List<ClubCardsDTO> CardsForEnterprise = new List<ClubCardsDTO>();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.ClubCards.ToList().ForEach(x =>
                {
                    if (x.C_id == enterpId)
                        CardsForEnterprise.Add(Conversion.ClubCardsConversion.ConvertToDTO(x));
                });
                return CardsForEnterprise;
            }
        }
        public static List<selectCardsForUserDTO> selectCardsForUser(int userId)
        {
            List<selectCardsForUserDTO> userCardsList = new List<selectCardsForUserDTO>();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.selectCardsForUser(userId).ToList().ForEach(x =>
                userCardsList.Add(Conversion.selectCardsForUserConversion.ConvertToDTO(x)));
            }
            return userCardsList;
        }
        public static ClubCardsDTO getClubCard(int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                return Conversion.ClubCardsConversion.ConvertToDTO(db.ClubCards.FirstOrDefault(x => x.C_id == id));

            }
        }
        public static bool deleteCard(int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {

                try
                {
                    db.ClubCards.Remove(db.ClubCards.FirstOrDefault(x => x.C_id == id));
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }

            }


        }
        public static string NewCard(ClubCardsDTO card, ref string mess)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.ClubCards.FirstOrDefault(x => x.UserId==card.UserId && x.EnterpCardId == card.EnterpCardId) == null)
                {
                    card.Level = 0;
                    card.StatusPriseForBirthDay = false;
                    card.StatusPriseForNew = false;
                    card.Points = 0;
                    try
                    {
                        db.ClubCards.Add(Conversion.ClubCardsConversion.ConvertToClubCards(card));
                        db.SaveChanges();
                        return mess;
                    }
                    catch
                    {
                        mess = "System error";
                        return mess;
                    }
                }
                mess = "The card is already axist in your account";
            }
            return mess;

        }

    }

}

