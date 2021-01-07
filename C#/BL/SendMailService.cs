using DAL;
using DTO;
using System;
using System.Linq;
namespace BL
{
    public class SendMailService
    {
        public static SendMailDTO Insert(int id)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {

                string key = PasswordService.RandomPassword();
                while (SendMailService.IsKeyExist(key))
                    key = PasswordService.RandomPassword();
                SendMail sendMail = new SendMail();
                sendMail.GetterId = id;
                sendMail.Key = key;
                sendMail.SendDate = DateTime.Now;
                sendMail.Status = false;
                try
                {
                    db.SendMail.Add(sendMail);
                    db.SaveChanges();
                    return Conversion.SendMailConversion.ConvertToDTO(sendMail);
                }
                catch
                {
                    return null;
                }
            }
        }
        public static SendMailDTO getIdByKey(string key)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                SendMail sendMail = db.SendMail.FirstOrDefault(x => x.Key == key);
                if (sendMail != null)
                    return Conversion.SendMailConversion.ConvertToDTO(sendMail);
                else
                    return null;
            }
        }
        public static bool IsKeyExist(string key)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                SendMail sendMail = db.SendMail.FirstOrDefault(x => x.Key == key);
                if (sendMail != null)
                    return true;
                return false;
            }

        }

    }
}
