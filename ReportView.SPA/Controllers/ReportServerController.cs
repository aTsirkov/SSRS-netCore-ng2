using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using AlanJuden.MvcReportViewer.ReportService;
using Newtonsoft.Json;

namespace SSRS_AspNetCore_Angular.Controllers
{
    public class CatalogTreeItem
    {
        private IEnumerable<CatalogTreeItem> _items;
        public string label;
        public string icon;
        public string url;
        public string[] routerLink;
        public bool visible;
        public string command;
        public string EventEmitter;
        public string reportPath;

        public IEnumerable<CatalogTreeItem> items
        {
            get { return _items; }
            set { _items = value; }
        }

        public CatalogTreeItem(CatalogItem item)
        {
            this.label = item.Name;
            this.visible = !item.Hidden;
            switch(item.Type)
            {
                case ItemTypeEnum.Folder:
                    this.icon = "fa-folder";
                    break;
                case ItemTypeEnum.Report:
                    this.icon = "fa-rocket";
                    //this.routerLink = new string[] { "reportView", item.Path };
                    this.url = item.Path;
                    break;
                default:
                    break;
            }
            
        }
    }

    public class ReportInfo
    {
        public string Name;
        public string ReportPath;
        private IEnumerable<AlanJuden.MvcReportViewer.ReportParameterInfo> _ReportParams;
        public Int32 TotalPages;

        public IEnumerable<AlanJuden.MvcReportViewer.ReportParameterInfo> ReportParams
        {
            get { return _ReportParams; }
            set { _ReportParams = value; }
        }
    }

    [Route("api/[controller]/[action]")]
    public class ReportServerController : AlanJuden.MvcReportViewer.ReportController
    {
        protected override ICredentials NetworkCredentials
        {
            get
            {
                //Custom Domain authentication (be sure to pull the info from a config file)
                //return new System.Net.NetworkCredential("tsirkovaa", "qwe1234567-=", "sibur");

                //Default domain credentials (windows authentication)
                return System.Net.CredentialCache.DefaultNetworkCredentials;
            }
        }

        protected override string ReportServerUrl
        {
            get
            {
                //You don't want to put the full API path here, just the path to the report server's ReportServer directory that it creates (you should be able to access this path from your browser: https://YourReportServerUrl.com/ReportServer/ReportExecution2005.asmx )
                return "http://hp-home/ReportServer";    // "http://s502db-app102:80/IntegratedReportServer";      //"http://s502as-its-sp01/ReportServer";   "http://win-cnmcav8afvc/ReportServer"; "http://hp-home/ReportServer";
            }
        }

        [HttpGet]
        public JsonResult ReportsTreeList(string catalogPath = "/", bool Recursive = true)
        {
            return Json(GetCatalogItems(catalogPath, Recursive), DefaultJsonSettings);
        }

        [HttpGet]
        public JsonResult getReportParams(string reportPath)
        {
            ReportInfo ri = new ReportInfo();
            ri.ReportParams = this.getParameters(reportPath);
            ri.ReportPath = reportPath;
            string[] rep = reportPath.Split('/');
            ri.Name = rep[rep.Length - 1];
            return Json(ri, DefaultJsonSettings);
        }

        [HttpGet]
        public JsonResult getReportPage(string reportPath, int? page = 0)
        {
            return this.ViewReportPage(reportPath, 1);  // Json(this.ViewReportPage(reportPath, 1), DefaultJsonSettings);
        }

        private List<CatalogTreeItem> GetCatalogItems(string catalogPath, bool Recursive)
        {
            List<CatalogTreeItem> result = new List<CatalogTreeItem>();
            
            CatalogItem[] response = this.ReloadCatalogItems(catalogPath, false);
            foreach(CatalogItem item in response)
            {
                List<CatalogTreeItem> children = new List<CatalogTreeItem>();
                CatalogTreeItem itm = new CatalogTreeItem(item);

                if (Recursive && (item.Type == ItemTypeEnum.Folder))
                {
                    children = GetCatalogItems(item.Path, Recursive);
                    itm.items = (children.Count == 0) ? null : children;
                }
                result.Add(itm);
            }

            return result;
        }

        private JsonSerializerSettings DefaultJsonSettings
        {
            get
            {
                return new JsonSerializerSettings()
                {
                    Formatting = Formatting.Indented
                };
            }
        }
    }
}
