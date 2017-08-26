using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SSRS_AspNetCore_Angular.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("Index");
        }

        public IActionResult Contact()
        {
            return View("Contact");
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
