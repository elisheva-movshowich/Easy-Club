using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
    public class UsersService
    {
        /// <summary>
        /// מקבלת סיסמת משתמש ומאמתת אותה
        /// </summary>
        /// <param name="password"></param>
        /// <returns></returns>
        public static UsersDTO LogIn(string password, string email)
        {
            Users User = new Users();
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                User = db.Users.ToList().FirstOrDefault(x => x.Password == password && x.Email == email);
                return User == null ? null : Conversion.UsersConversion.ConvertToDTO(User);
            }
        }
        /// <summary>
        /// מקבלת קוד עסק ומחזירה רשימה של לקוחות העסק
        /// </summary>
        /// <param name="enterpId"></param>
        /// <returns></returns>
        public static List<UsersDTO> GetUsers(int enterpId)
        {
            List<UsersDTO> UsersForEnterprise = new List<UsersDTO>();
            List<ClubCardsDTO> CardsForEnterprise = new List<ClubCardsDTO>();
            CardsForEnterprise = ClubCardsService.GetClubCards(enterpId);
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                CardsForEnterprise.ForEach(x =>
                {
                    db.Users.ToList().ForEach(y =>
                    {
                        if (x.UserId == y.C_id)
                            UsersForEnterprise.Add(Conversion.UsersConversion.ConvertToDTO(y));
                    });
                });
                return UsersForEnterprise;
            }
        }
        public static UsersDTO GetUser(int id)
        {
            using (ClubCardsEntities db=new ClubCardsEntities())
            {
                Users user=db.Users.FirstOrDefault(x => x.C_id == id);
                if (user != null)
                    return Conversion.UsersConversion.ConvertToDTO(user);
                return null;
            }
          
        }
        public static bool NewPassword(string email, ref string mess)
        {
            if (!UsersService.IsEmailExist(email,-1))
            {
                mess = "Email is not exists";
                return false;
            }
            UsersDTO user = UsersService.GetUserByEmail(email);
            if (user != null)
            {
                SendMailDTO sendMail = SendMailService.Insert(user.C_id);
                if (sendMail != null)
                {
                    string subject = "New Password";
                    string body = EmailService.readHtmlForMail(2);
                    body = body.Replace("{name}", user.Name);
                    body = body.Replace("{key}", sendMail.Key);
                    body = body.Replace("{who}", "users");
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
        /// מקבלת פרטי משתמש ומוסיפה אותו ברשימת הלקוחות 
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        public static UsersDTO SighUp(UsersDTO usersDTO, ref string mess)
        {
            if (IsEmailExist(usersDTO.Email,-1) || IsPasswordExist(usersDTO.Password, -1) || IsIdentityExist(usersDTO.Tz,-1))
            {
                if (IsEmailExist(usersDTO.Email,-1))
                    mess = "Email exist";
                if (IsPasswordExist(usersDTO.Password, -1))
                    mess = "Password exist";
                if (IsIdentityExist(usersDTO.Tz,-1))
                    mess = "Identity exist";
                return null;
            }
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                usersDTO.Level = 0;
                try
                {
                    db.Users.Add(Conversion.UsersConversion.ConvertToUser(usersDTO));
                    db.SaveChanges();
                }
                catch (Exception e)
                {
                    return null;
                }
                if (SendMailService.Insert(usersDTO.C_id) != null)
                {
                    string subject = "Welcome to EasyClub Application";
                    string body = EmailService.readHtmlForMail(0);
                    body = body.Replace("{name}", usersDTO.Name);
                    if (EmailService.sendMail(usersDTO.Email, body, subject))
                        return usersDTO;
                }
                return null;
            }
        }
        /// <summary>
        /// מקבלת סיסמת לקוח ובודקת האם קים ברשימת הלקוחות
        /// </summary>
        /// <param name="password"></param>
        /// <returns></returns>
        public static bool IsPasswordExist(string password, int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.Users.ToList().FirstOrDefault(x => x.Password == password && x.C_id != id) == null)
                    return false;
                return true;
            }

        }
        /// <summary>
        /// מקבלת כתובת מיל ובודקת האם קים במערכת
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public static bool IsEmailExist(string email,int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.Users.ToList().FirstOrDefault(x => x.Email == email && x.C_id != id) == null)
                    return false;
                return true;
            }

        }
        public static bool IsIdentityExist(string tz,int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (db.Users.ToList().FirstOrDefault(x => x.Tz == tz && x.C_id != id) == null)
                    return false;
                return true;
            }

        }
        public static UsersDTO GetUserByEmail(string email)
        {

            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                return Conversion.UsersConversion.ConvertToDTO(db.Users.ToList().First(x => x.Email == email));
            }
        }

        public static bool ChangePassword(string password, int userId)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                try
                {
                    db.Users.FirstOrDefault(x => x.C_id == userId).Password = password;
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }


            }
        }
        public static UsersDTO UpdateUser(UsersDTO user,ref string mess)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                if (IsEmailExist(user.Email, user.C_id) || IsPasswordExist(user.Password, user.C_id) || IsIdentityExist(user.Tz, user.C_id))
                {
                    if (IsEmailExist(user.Email, user.C_id))
                        mess = "Email exist";
                    if (IsPasswordExist(user.Password, user.C_id))
                        mess = "Password exist";
                    if (IsIdentityExist(user.Tz, user.C_id))
                        mess = "Identity exist";
                    return null;
                }
                Users Newuser = db.Users.FirstOrDefault(x => x.C_id == user.C_id);
                if (Newuser == null)
                {
                    mess = "System Error";
                    return null;
                }
                Newuser.C_id = user.C_id;
                Newuser.Tz = user.Tz;
                Newuser.Email = user.Email;
                Newuser.Name = user.Name;
                Newuser.Password = user.Password;
                Newuser.Phone = user.Phone;
                Newuser.Level = user.Level;
                Newuser.BirthDate = user.BirthDate;
                try
                {
                    db.SaveChanges();
                    return Conversion.UsersConversion.ConvertToDTO(Newuser);
                }
                catch
                {
                    mess = "System Error";
                    return null;
                }
            }
        }

    }
}
