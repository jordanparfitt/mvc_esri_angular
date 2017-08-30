using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mvc_esri_angular.Startup))]
namespace mvc_esri_angular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
