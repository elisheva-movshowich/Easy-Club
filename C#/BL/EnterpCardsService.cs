using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
    public class EnterpCardsService
    {
        /// <summary>
        ///מקבלת קוד כרטיס של עסק ובודקת האם קים כרטיס כזה ברשימת הלקוחות אם כן בודקת האם הכרטיס עדין
        /// בתוקף.אם כן לא תנתן אפשרות למחוק את הכרטיס אחרת תשלח אישור למחיקה
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool okToRemove(int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.ClubCards.Where(x => x.EnterpCardId == id && x.ExpireDate >= DateTime.Now) != null)
                    return false;
                return true;
            }
        }
        /// <summary>
        /// מקבלת קוד כרטיס של עסק ומוחקת אותו 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool RemoveEnterpCard(int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.EnterpCards.ToList().Remove(db.EnterpCards.FirstOrDefault(x => x.C_id == id));
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
        /// <summary>
        /// ומבצעת הוספה  של הכרטיס לטבלת כרטיסים לעסק EnterpCardsDTO  מקבלת משתנה מסוג 
        /// </summary>
        /// <param name="enterpCardDTO"></param>
        /// <returns></returns>
        public static bool AddEnterpCard(EnterpCardsDTO enterpCardDTO)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                try
                {
                    db.EnterpCards.Add(Conversion.EnterpCardsConversion.ConvertToEnterpCards(enterpCardDTO));
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
        /// <summary>
        /// מקבלת כרטיס בעסק ובודקת האם קיים לעסק כזה כרטיס
        /// </summary>
        /// <param name="enterpCardDTO"></param>
        /// <returns></returns>
        public static bool IsEnterpCardExist(EnterpCardsDTO enterpCardDTO)
        {

            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                EnterpCards enterpCard = Conversion.EnterpCardsConversion.ConvertToEnterpCards(enterpCardDTO);
                if (db.EnterpCards.FirstOrDefault(x => x.EnterpId == enterpCard.EnterpId && x.Type == enterpCard.Type) != null)
                    return true;
                return false;
            }
        }
        public static List<EnterpCardsDTO> GetEnterpCards(int enterpId)
        {
            List<EnterpCardsDTO> enterpCards = new List<EnterpCardsDTO>();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.EnterpCards.ToList().ForEach(x =>
                {
                    if (x.EnterpId == enterpId)
                        enterpCards.Add(Conversion.EnterpCardsConversion.ConvertToDTO(x));
                }
                );
            }
            return enterpCards;

        }
        public static List<selectAllEnterpCardsDTO> GetAllEnterpCards()
        {
            List<selectAllEnterpCardsDTO> enterpCards = new List<selectAllEnterpCardsDTO>();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.selectAllEnterpCards().ToList().ForEach(x =>
           enterpCards.Add(Conversion.selectAllEnterpCardsConversion.ConvertToDTO(x)));
            }
            return enterpCards;
        }
        public static EnterpCardsDTO GetEnterpCardId(int enterpId, string type)
        {
            EnterpCards enterpCard = new EnterpCards();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                enterpCard = db.EnterpCards.FirstOrDefault(x => x.EnterpId == enterpId && x.Type == type);
                return enterpCard != null ? Conversion.EnterpCardsConversion.ConvertToDTO(enterpCard) : null;
            }
        }
        public static bool UpdateCard(EnterpCardsDTO data)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                EnterpCards card = new EnterpCards();
                card = db.EnterpCards.FirstOrDefault(x => x.C_id == data.C_id);
                if (card != null)
                {
                    List<Lotery> lotery = new List<Lotery>();
                    try
                    {
                        card.C_id = data.C_id;
                        foreach (var item in data.Lotery)
                        {
                            lotery.Add(Conversion.LoteryConversion.ConvertToLotery(item));
                        }
                        card.Lotery = lotery;
                        card.FileName = data.FileName;
                        card.Duration = data.Duration;
                        card.EnterpId = data.EnterpId;
                        card.Cost = data.Cost;
                        card.CountPoints = data.CountPoints;
                        card.Type = data.Type;
                        card.Payment = data.Payment;
                        card.Img = data.Img;
                        db.SaveChanges();
                        return true;
                    }
                    catch
                    {
                        return false;
                    }
                }
                return false;
            }

        }
    }
}
