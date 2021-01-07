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

    public class SendMailController : ApiController
    {
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

        [HttpGet]
        public IHttpActionResult IsTimeHover(string key)
        {
            SendMailDTO sendMail = SendMailService.getIdByKey(key);
            if (sendMail != null)
            {
                if (DateTime.Compare(DateTime.Now.AddMinutes(-30), (DateTime)sendMail.SendDate) >0)
                    return BadRequest("Sorry,but your time is hover," +
                        "please try again");
                return Ok(sendMail.GetterId);
            }
            return BadRequest("System Error," +
                " please try again later");
        }
    }
}

