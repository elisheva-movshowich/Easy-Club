using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
  public  class ContactService
    {
        public static bool AddContact(ContactDTO contact)
        {
            using (ClubCardsEntities db = new ClubCardsEntities())
            {
                try
                {
                    db.Contact.Add(Conversion.ContactConversion.ConvertToContact(contact));
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
    }
}
