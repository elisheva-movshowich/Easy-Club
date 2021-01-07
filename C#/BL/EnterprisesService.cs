using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
    public class EnterprisesService
    {
        /// <summary>
        /// מחזירה רשימה של כל העסקים הרשומים באתר
        /// </summary>
        /// <returns></returns>
        public static List<EnterprisesDTO> GetEnterprises()
        {
            List<EnterprisesDTO> enterprisesDTO = new List<EnterprisesDTO>();

            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                db.Enterprises.ToList().ForEach(x =>
                {
                    enterprisesDTO.Add(Conversion.EnterprisesConversion.ConvertToDTO(x));
                });
                return enterprisesDTO;
            }
        }
        public static bool SignUp(EnterprisesDTO enterprise)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                enterprise.Active = false;
                try
                {
                    db.Enterprises.Add(Conversion.EnterprisesConversion.ConvertToEnterprises(enterprise));
                    db.SaveChanges();
                }
                catch
                {
                    return false;
                }
                if (SendMailService.Insert(enterprise.C_id) != null)
                {
                    string subject = "Welcome to EasyClub Application";
                    string body = EmailService.readHtmlForMail(0);
                    body = body.Replace("{name}", enterprise.Name);
                    if (EmailService.sendMail(enterprise.Email, body, subject))
                        return true;
                }
                return false;
            }
        }
        public static bool IsPasswordExist(string EnterpPassword, int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.Enterprises.ToList().FirstOrDefault(x => x.Password == EnterpPassword && x.C_id != id) == null)
                    return false;
                return true;

            }

        }
        /// <summary>
        /// מקבלת קוד עסק וכתובת מייל ובודקת האם הנתונים תקינים
        /// null אם כן מחזירה את העסק אחרת מחזירה 
        /// </summary>
        /// <param name="code"></param>
        /// <param name="mail"></param>
        /// <returns></returns>
        public static EnterprisesDTO LogIn(string password, string email)
        {
            Enterprises enterprise = new Enterprises();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                enterprise = db.Enterprises.FirstOrDefault(x => x.Password == password && x.Email == email);
                if (enterprise != null)
                {
                    if (SendMailService.Insert(enterprise.C_id) != null)
                    {
                        SendMailDTO sendMail = SendMailService.Insert(enterprise.C_id);
                        if (sendMail != null)
                        {
                            string body = EmailService.readHtmlForMail(1);
                            body = body.Replace("{key}", sendMail.Key);
                            body = body.Replace("{name}", enterprise.Name);
                            string subject = "EasyClub";
                            if (EmailService.sendMail(email, body, subject))
                                return Conversion.EnterprisesConversion.ConvertToDTO(enterprise);
                        }
                    }
                    return null;
                }
                return null;
            }
        }
        public static bool NewPassword(string email, ref string mess)
        {
            if (!EnterprisesService.IsEmailExist(email,-1))
            {
                mess = "Email is not exists";
                return false;
            }
            EnterprisesDTO enterprise = EnterprisesService.GetEnterpriseByEmail(email);
            if (enterprise != null)
            {
                SendMailDTO sendMail = SendMailService.Insert(enterprise.C_id);
                if (sendMail != null)
                {
                    string subject = "New Password";
                    string body = EmailService.readHtmlForMail(2);
                    body = body.Replace("{name}", enterprise.Name);
                    body = body.Replace("{key}", sendMail.Key);
                    body = body.Replace("{who}", "enterprises");
                    if (EmailService.sendMail(email, body, subject))
                        return true;
                    mess = "System Error try again later";
                    return false;
                }
            }
            mess = "System Error try again later";
            return false;
        }
        /// <summary>
        /// עוברת פעם בחודש על רשימת העסקים ומוחקת עסק לא פעיל
        /// </summary>
        //public static void RemoveEnterprises()
        //{
        //    using (ClubCardsEntities db = new ClubCardsEntities())
        //    {
        //        db.Enterprises.ToList().ForEach(x =>
        //        {
        //            if (x.Active == false)
        //                db.Enterprises.Remove(x);
        //        });
        //        db.SaveChanges();
        //    }
        //}


        /// <summary>
        /// מקבלת קוד עסק ומחזירה רשימה של כרטיסי מועדון של העסק
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static EnterprisesDTO GetEnterprise(int enterpId)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                return Conversion.EnterprisesConversion.ConvertToDTO(db.Enterprises.FirstOrDefault(x => x.C_id == enterpId));
            }

        }
        public static bool IsEmailExist(string email,int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.Enterprises.ToList().FirstOrDefault(x => x.Email == email && x.C_id != id) == null)
                    return false;
                return true;
            }

        }
        public static bool IsNameExist(string name ,int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.Enterprises.ToList().FirstOrDefault(x => x.Name == name && x.C_id != id) == null)
                    return false;
                return true;
            }

        }
        public static EnterprisesDTO GetEnterpriseByEmail(string email)
        {

            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                return Conversion.EnterprisesConversion.ConvertToDTO(db.Enterprises.ToList().First(x => x.Email == email));
            }
        }
        public static bool ChangePassword(string password, int enterpId)
        {

            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                try
                {
                    db.Enterprises.FirstOrDefault(x => x.C_id == enterpId).Password = password;
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
        public static EnterprisesDTO UpdateEnterprise(EnterprisesDTO enterprise)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                Enterprises NewEnterprise = new Enterprises();
                NewEnterprise = db.Enterprises.FirstOrDefault(x => x.C_id == enterprise.C_id);
                if (NewEnterprise == null)
                {
                    return null;
                }
                NewEnterprise.C_id = enterprise.C_id;
                NewEnterprise.Active = enterprise.Active;
                NewEnterprise.Email = enterprise.Email;
                NewEnterprise.Name = enterprise.Name;
                NewEnterprise.Password = enterprise.Password;
                NewEnterprise.Phone = enterprise.Phone;
                NewEnterprise.Url = enterprise.Url;

                try
                {
                    db.SaveChanges();
                    return Conversion.EnterprisesConversion.ConvertToDTO(NewEnterprise);
                }
                catch
                {
                    return null;
                }
            }
        }

    }
}
