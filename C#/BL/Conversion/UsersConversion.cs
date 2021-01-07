using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.Conversion
{
    /// <summary>
    ///  covert from DAL to DTO and vise versa
    /// </summary>
    public class UsersConversion
    {
        public static UsersDTO ConvertToDTO(Users user)
        {
            UsersDTO newUser = new UsersDTO();
            newUser.C_id = user.C_id;
            newUser.Tz = user.Tz;
            newUser.Name = user.Name;
            newUser.Phone = user.Phone;
            newUser.Email = user.Email;
            newUser.Password = user.Password;
            newUser.Level = user.Level;
            newUser.BirthDate = user.BirthDate;
            return newUser;
        }
        public static Users ConvertToUser(UsersDTO userDTO) {
            Users newUser = new Users();
            newUser.C_id = userDTO.C_id;
            newUser.Tz = userDTO.Tz;
            newUser.Name = userDTO.Name;
            newUser.Phone = userDTO.Phone;
            newUser.Email = userDTO.Email;
            newUser.Password = userDTO.Password;
            newUser.Level = userDTO.Level;
            newUser.BirthDate = userDTO.BirthDate;
            return newUser;
        }
    }
}
