using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Pipes;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using DAL;

namespace BL
{
    /// <summary>
    /// מקבלת פרטי עסק נכנס וכתובת מיל של העסק ושולחת מיל לעסק עם סיסמא 
    /// </summary>
    public class EmailService
    {
        public static bool sendMail(string email, string body, string subject)
        {
            using (MailMessage mailMessage = new MailMessage("easyclub100@gmail.com", email))
            {
                mailMessage.Subject = subject;
                mailMessage.Body = body;
                mailMessage.IsBodyHtml = true;
                SmtpClient client = new SmtpClient("smtp.gmail.com");
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Timeout = 30 * 1000;
                client.Credentials = new NetworkCredential("easyclub100@gmail.com", "0527627140");
                client.Port = 587;
                client.EnableSsl = true;
                try
                {
                    client.Send(mailMessage);
                    return true;
                }
                catch
                {
                    return false;
                }
            }

        }
        public static string readHtmlForMail(int status)
        {
            string body = string.Empty;
            string path = "";
            if (status == 0)
                path = @"D:/Programming/easy-club/React/src/MailHtmlPages/SignUp.html";
            else
                if (status == 1)
                   path = @"D:/Programming/easy-club/React/src/MailHtmlPages/EnterpriseLogIn.html";
                else
                path = @"D:/Programming/easy-club/React/src/MailHtmlPages/NewPassword.html";
            using (var reader = new StreamReader(path))
            {
                body = reader.ReadToEnd();
            }
            return body;
        }
    }
}

