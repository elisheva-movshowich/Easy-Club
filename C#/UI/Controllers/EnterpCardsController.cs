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

    public class EnterpCardsController : ApiController
    {

        /// <summary>
        /// מחיקת כרטיס מועדון 
        /// בדיקה שהכרטיס לא פעיל
        /// הפונקציה מחזירה אישור או סיבת בעיה
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public IHttpActionResult RemoveEnterpCard(int id)
        {
            if (EnterpCardsService.okToRemove(id))
            {
                return BadRequest("There are cards used");
            }
            if (EnterpCardsService.RemoveEnterpCard(id))
                return Ok();
            return BadRequest("System error, please try later");
        }
        //[HttpGet]
        //public IHttpActionResult IsEnterpCardExist(EnterpCardsDTO enterpCardDTO)
        //{
        //    //פונקתית סליקה
        //    if (EnterpCardsService.IsEnterpCardExist(enterpCardDTO))
        //        return BadRequest("The card exists in the Enterprise");
        //    return Ok("Card successfully registered");
        //}
        //[HttpGet]
        //public IHttpActionResult BuyEnterpCard()
        //{
        //    EnterpCardsDTO enterpCardDTO = new EnterpCardsDTO();
        //    if (EnterpCardsService.BuyEnterpCard(enterpCardDTO) == null)
        //        return BadRequest("System error, please try later");
        //    return Ok(enterpCardDTO);
        //}
        [HttpGet]
        public IHttpActionResult GetEnterpCard(int id)
        {
            List<EnterpCardsDTO> enterpCard = EnterpCardsService.GetEnterpCards(id);
            if (enterpCard != null)
                return Ok(enterpCard);
            return BadRequest("No Cards Found");
        }
        [HttpGet]
        public IHttpActionResult GetAllEnterpCard()
        {
            List<selectAllEnterpCardsDTO> enterpCards = EnterpCardsService.GetAllEnterpCards();
            if (enterpCards != null)
                return Ok(enterpCards);
            return BadRequest("No Cards Found");
        }
        //[HttpGet]
        //public List<EnterpCardsDTO> GetViewEnterpCards(int id)
        //{
        //    return EnterprisesService.ViewEnterpCards(id);
        //}
        [HttpPost]
        public IHttpActionResult AddEnterpCard(EnterpCardsDTO data)
        {
            if (data != null)
            {
                if (EnterpCardsService.AddEnterpCard(data))
                {
                    return Ok();
                }
            }
            return BadRequest("Error,please try again later");
        }
        [HttpPut]
        public IHttpActionResult UpdateCard(EnterpCardsDTO data)
        {
            
            if (data != null && LoteryService.DeleteLotery(data))
            {
                if (EnterpCardsService.UpdateCard(data))
                    return Ok("ok");

            }
            return BadRequest("system error");

        }
    }
}
