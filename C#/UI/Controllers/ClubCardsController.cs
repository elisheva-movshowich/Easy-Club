using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;
using System.Web.Http.Cors;

namespace UI.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

    public class ClubCardsController : ApiController
    {

        //[HttpGet]
        //public List<MyCardDTO> GetViewCards(int userId)
        //{
        //    return ClubCardsService.ViewCards(userId);
        //}
        //[HttpGet]
        //public List<ClubCardsDTO> GetClubCards(int enterpId)
        //{
        //    return ClubCardsService.GetClubCards(enterpId);
        //}
        [HttpGet]
        public bool IsClubCardExist(int enterpCardId, int userId)
        {
            return ClubCardsService.IsClubCardExist(enterpCardId, userId);
        }
        [HttpGet]
        public IHttpActionResult SelectCardsForUser(int id)
        {
            UsersDTO user = UsersService.GetUser(id);
            if (user != null)
            {
                List<LoteryPlusCardDTO> userCards = new List<LoteryPlusCardDTO>();
                List<selectCardsForUserDTO> userCardsList = ClubCardsService.selectCardsForUser(user.C_id);
                foreach (var item in userCardsList)
                {
                    List<LoteryDTO> lottery = LoteryService.selectLotteriesForCard(item, user);
                    LoteryPlusCardDTO card = new LoteryPlusCardDTO();
                    card.Lottery = lottery;
                    card.Card = item;
                    userCards.Add(card);
                }
                if (userCards.Count != 0)
                    return Ok(userCards);
            }
            return BadRequest("No matching cards found");
        }
        [HttpDelete]
        public IHttpActionResult deleteCard(int id, int userId)
        {
            ClubCardsDTO myCard = ClubCardsService.getClubCard(id);
            if (myCard != null)
            {
                if (ClubCardsService.IsClubCardExist((int)myCard.EnterpCardId, userId))
                    if (ClubCardsService.deleteCard(id))
                        return Ok("Card successfully deleted");
                    else
                        return BadRequest("id is incorrect");
            }
            return BadRequest("");
        }
        [HttpPost]
        public IHttpActionResult NewCard(ClubCardsDTO card)
        {
            if (card == null)
            {
                return BadRequest();//404
            }
            string mess = "";
            mess = ClubCardsService.NewCard(card, ref mess);
                if (mess == "")
                    return Ok("succeed");//200
            return BadRequest(mess);

        }
    }
}
