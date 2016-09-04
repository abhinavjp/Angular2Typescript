using AngType.Api.Models;
using AngType.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngType.Api.Controllers
{
    public class HeroController : ApiController
    {
        private readonly HeroService heroService = new HeroService();

        [HttpGet]
        public HttpResponseMessage GetHeroes()
        {
            return Request.CreateResponse(HttpStatusCode.OK, heroService.GetHeroList());
        }

        [HttpPost]
        public HttpResponseMessage CreateHero(HeroServiceModel hero)
        {
            heroService.CreateOrUpdateHero(hero);
            return Request.CreateResponse(HttpStatusCode.OK, "Created");
        }

        [HttpPost]
        public HttpResponseMessage UpdateHero(HeroServiceModel hero)
        {
            heroService.CreateOrUpdateHero(hero);
            return Request.CreateResponse(HttpStatusCode.OK, "Updated");
        }
    }
}
