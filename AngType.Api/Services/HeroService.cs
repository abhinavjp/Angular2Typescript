using AngType.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngType.Api.Services
{
    public class HeroService
    {

        private static List<HeroServiceModel> HeroList = new List<HeroServiceModel> { new HeroServiceModel { Id=1, Name="X-Men"}, new HeroServiceModel { Id=2, Name="Batman"} };

        public List<HeroServiceModel> GetHeroList()
        {
            return HeroList;
        }

        public voId CreateOrUpdateHero(HeroServiceModel hero)
        {
            if(hero.Id == default(int))
            {
                var maxId = HeroList.Max(h => h.Id);
                hero.Id = maxId + 1;
                HeroList.Add(hero);
            }
            else
            {
                HeroList.ForEach(h => {
                    if(h.Id == hero.Id)
                    {
                        h.Name = hero.Name;
                    }
                });
            }
        }
    }
}