using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;
using System.Web.Http.Cors;
namespace UI.Controllers

{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="password"></param>
        /// <param name="mail"></param>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult LogIn(string password, string email)
        {
            UsersDTO user = UsersService.LogIn(password, email);
            if (user == null)
                return BadRequest("One of the details entered is incorrect");
            return Ok(user);
        }

        [HttpPost]
        public IHttpActionResult SingUp(UsersDTO user)
        {
            if (user == null)
            {
                return BadRequest();//404
            }
            string mess = "";
            if (UsersService.SighUp(user, ref mess) != null)
                if (mess == "")
                    return Ok("succeed");//200
            return BadRequest(mess);

        }

        [HttpGet]
        public List<UsersDTO> GetUsers(int enterpId)
        {
            return UsersService.GetUsers(enterpId);
        }
        [HttpGet]
        public IHttpActionResult NewPassword(string email)
        {
            string mess = "";
            if (UsersService.NewPassword(email, ref mess))
                return Ok(mess);
            return BadRequest(mess);
        }
        //public IHttpActionResult IsEmailExist(string email)
        //{
        //    if (UsersService.IsEmailExist(email))
        //        return Ok(UsersService.GetUserByEmail(email));
        //    return BadRequest("no such a user");
        //}
        //[HttpGet]
        //public IHttpActionResult IsPasswordExist(string password)
        //{
        //    if (UsersService.IsPasswordExist(password))
        //        return BadRequest("password already exist");
        //    return Ok(password);

        //}
        [HttpPost]
        public IHttpActionResult ChangePassword(string key, string password)
        {
            SendMailDTO sendMail = SendMailService.getIdByKey(key);
            if (sendMail != null)
            {
                if (!UsersService.IsPasswordExist(password, (int)sendMail.GetterId))
                {
                    if (UsersService.ChangePassword(password, (int)sendMail.GetterId))
                        return Ok(sendMail);
                    return BadRequest("system error,please try later");
                }
                return BadRequest("password is already exist");
            }
            return BadRequest("system error,please try later");
        }
        [HttpPut]
        public IHttpActionResult UpdateUser(UsersDTO user)
        {
            if (user == null)
                return BadRequest("system error");
            string mess = "";
            UsersDTO Newuser = UsersService.UpdateUser(user, ref mess);
            if (Newuser == null)
                return BadRequest(mess);
            return Ok(Newuser);//200
        }

    }
}
