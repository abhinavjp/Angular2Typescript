using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(AngType.Api.Startup))]

namespace AngType.Api
{
    public partial class Startup
    {
        public voId Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
        }
    }
}
