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

    public class LoteryController : ApiController
    {
        //[HttpGet]
        //public IHttpActionResult GetLogin(ManagerEnterDTO managerEnter, string possword)
        //{
        //    if (ManagerEnterService.managerEnter(managerEnter, possword))
        //        return Ok();
        //    return BadRequest("Data not vaild");
        //}
        //[HttpPost]
        //public IHttpActionResult PostSignIn(EnterprisesDTO enterprise)
        //{
        //    if (SendMailService.managerSighUp(enterprise))
        //        return BadRequest("System error");
        //    return Ok("The plugin enterprise successfully");
        //}
    }
}
