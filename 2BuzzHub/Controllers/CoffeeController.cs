﻿using Newtonsoft.Json;
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
using System.Web.Http.Cors;

namespace BuzzHub.Controllers
{
    [EnableCors(origins: "api/Coffee", headers: "*", methods: "*")]
    public class CoffeeController : ApiController
    {
        private CoffeeRepository repo = new CoffeeRepository();

        //GET
        [Route("api/Coffee")]
        [HttpGet]
        public IEnumerable<Coffee> Get() {
            return repo.All();
        }

        //GET by id
        [Route("api/Coffee/{id}")]
        [HttpGet]
        public Coffee GetById(int id) 
        {
            return repo.GetById(id);
        }

        // POST
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

        //DELETE
        [Route("api/Coffee/{id}")]
        [HttpDelete]
        public HttpResponseMessage DeleteCoffee(int id)
        {
            repo.DeleteCoffee(id);
            repo.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

       
      
    }

}