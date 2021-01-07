using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BL;
using DTO;
namespace UI.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

    public class EnterprisesController : ApiController
    {
        [HttpGet]
        public List<EnterprisesDTO> GetEnterprises()
        {
            return EnterprisesService.GetEnterprises();
        }
        //מנהל נרשם

        [HttpPost]
        public IHttpActionResult SingUp(EnterprisesDTO enterprise)
        {
            if (enterprise == null)
            {
                return BadRequest();//404
            }
            if (EnterprisesService.IsPasswordExist(enterprise.Password,-1))
            {
                return BadRequest("password is exist");
            }
            if (EnterprisesService.IsEmailExist(enterprise.Email, -1))
            {
                return BadRequest("email is exist");
            }
            if (EnterprisesService.IsNameExist(enterprise.Name, -1))
            {
                return BadRequest("Name is exist");
            }
            if (!EnterprisesService.SignUp(enterprise))
                return BadRequest("system error");
            return Ok(enterprise);//200

        }

        [HttpGet]
        public IHttpActionResult GetEnterprise(int enterpId)
        {   EnterprisesDTO enterprise=EnterprisesService.GetEnterprise(enterpId);
            if (enterprise!=null)

                return Ok(enterprise);
            return BadRequest("System Error,Please Try Again Later");
         
        
        }
        [HttpGet]
        public IHttpActionResult NewPassword(string email)
        {
            string mess = "";
            if (EnterprisesService.NewPassword(email, ref mess))
                return Ok(mess);
            return BadRequest(mess);
        }
        //[HttpGet]
        //public IHttpActionResult IsEmailExist(string email)
        //{
        //    if (EnterprisesService.IsEmailExist(email))
        //        return Ok(EnterprisesService.returnEnterpriseByEmail(email));
        //    return BadRequest("no such a enterprise");
        //}
        //public IHttpActionResult isPasswordExist(string password)
        //{
        //    if (!EnterprisesService.IsPasswordExist(password))
        //        return Ok(password);
        //    return BadRequest("password already exist");
        //}
        [HttpPost]
        public IHttpActionResult ChangePassword(string key, string password)
        {
            SendMailDTO sendMail = SendMailService.getIdByKey(key);
            if (sendMail != null)
            {
                if (!EnterprisesService.IsPasswordExist(password, (int)sendMail.GetterId))
                {
                    if (EnterprisesService.ChangePassword(password, (int)sendMail.GetterId))
                        return Ok(sendMail);
                    return BadRequest("system error");
                }
                return BadRequest("password is already exist");
            }
            return BadRequest("system error");


        }
        [HttpGet]
        public IHttpActionResult LogIn(string password,string email)
        {
            EnterprisesDTO enterprise = EnterprisesService.LogIn(password, email);
            if (enterprise!=null)
                return Ok(enterprise);
            return BadRequest("One of the details entered is incorrect");
        }
        [HttpPut]
        public IHttpActionResult UpdateEnterprise(EnterprisesDTO enterprise)
        {
            if (enterprise == null)
            {
                return BadRequest();//404
            }
            if (EnterprisesService.IsPasswordExist(enterprise.Password, enterprise.C_id))
            {
                return BadRequest("password is exist");
            }
            if (EnterprisesService.IsEmailExist(enterprise.Email, enterprise.C_id))
            {
                return BadRequest("email is exist");
            }
            if (EnterprisesService.IsNameExist(enterprise.Name, enterprise.C_id))
            {
                return BadRequest("Name is exist");
            }
            EnterprisesDTO NewEnterprise = new EnterprisesDTO();
            NewEnterprise = EnterprisesService.UpdateEnterprise(enterprise);
            if (NewEnterprise == null)
                return BadRequest("system error");
            return Ok(NewEnterprise);
        }
    }
}
