using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(StoreCart.Startup))]
namespace StoreCart
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
