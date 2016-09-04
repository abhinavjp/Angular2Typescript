using System.Web;
using System.Web.Mvc;

namespace AngType.Api
{
    public class FilterConfig
    {
        public static voId RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
