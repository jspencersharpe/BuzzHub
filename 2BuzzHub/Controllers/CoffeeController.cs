using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Net;
using System.Net.Http;
using System.Web.Security;
using BuzzHub.Repository;
using BuzzHub.Models;

namespace BuzzHub.Controllers
{
    public class CoffeeController : ApiController
    {
        private CoffeeRepository repo = new CoffeeRepository();


        //[Authorize]
        //[Route("")]
        //public IHttpActionResult Get()
        //{
        //    return Ok(Coffee.CreateCoffee());
        //}

        // GET
        //[Authorize]
        //[Route("api/Coffee")]
        //[HttpGet]
        //public List<Coffee> GetAllCoffees()
        //{
        //    List<Coffee> coffee = new List<Coffee>();
        //    coffee = repo.All().ToList();
        //    return coffee;
        //}

        //GET
        [Route("api/Coffee")]
        [HttpGet]
        public IEnumerable<Coffee> Get() {
            return repo.All();
        }

        // POST
        //[Authorize]
        [Route("api/Coffee")]
        [HttpPost]
        public HttpResponseMessage PostCoffee(Coffee coffee)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            repo.Add(coffee);
            return Request.CreateResponse(HttpStatusCode.Created);
        } 

       
      
    }

}