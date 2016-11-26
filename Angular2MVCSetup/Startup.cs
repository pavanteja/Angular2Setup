using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2MVCSetup.Startup))]
namespace Angular2MVCSetup
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
