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
    ///  covert from DAL to DTO and vise versa
    /// </summary>
    public class SendMailConversion
    {
        public static SendMailDTO ConvertToDTO(SendMail sendMail) {
            SendMailDTO newsendMail = new SendMailDTO();
            newsendMail.C_id = sendMail.C_id;
            newsendMail.GetterId = sendMail.GetterId;
            newsendMail.SendDate = sendMail.SendDate;
            newsendMail.Key = sendMail.Key;
            newsendMail.Status = sendMail.Status;
            return newsendMail;
        }
        public static SendMail ConvertToManagerEnter(SendMailDTO sendMailDTO)
        {
           SendMail newsendMail = new SendMail();
            newsendMail.C_id = sendMailDTO.C_id;
            newsendMail.GetterId = sendMailDTO.GetterId;
            newsendMail.SendDate = sendMailDTO.SendDate;
            newsendMail.Key = sendMailDTO.Key;
            newsendMail.Status = sendMailDTO.Status;
            return newsendMail;
        }
    }
}
