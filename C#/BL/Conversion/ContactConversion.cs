using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BL.Conversion
{
    class ContactConversion
    {
        public static ContactDTO ConvertToDTO(Contact contact)
        {
            ContactDTO newContact = new ContactDTO();
            newContact.C_id = contact.C_id;
            newContact.Name = contact.Name;
            newContact.Email = contact.Email;
            newContact.Phone = contact.Phone;
            newContact.Description = contact.Description;
            return newContact;
        }
        public static Contact ConvertToContact(ContactDTO contactDTO)
        {
            Contact newContact = new Contact();
            newContact.C_id = contactDTO.C_id;
            newContact.Name = contactDTO.Name;
            newContact.Email = contactDTO.Email;
            newContact.Phone = contactDTO.Phone;
            newContact.Description = contactDTO.Description;
            return newContact;


        }
    }
}
