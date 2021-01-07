using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;
using System.Web.Http;
using System.Web.Http.Cors;
namespace UI.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class ContactController : ApiController
    {
        [HttpPost]
        public IHttpActionResult AddContact(ContactDTO contact)
        {
            if (ContactService.AddContact(contact))
                return Ok("succeed");
            return BadRequest("System error,please try later");
        }
    }
}
