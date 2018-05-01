using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BIMManager.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BIMManager.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Project")]
    public class ProjectController : Controller
    {
        private readonly BIMManagerContext _dbContext;

        public ProjectController(BIMManagerContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var listOfProjects = _dbContext.Projects.ToList();
            if (listOfProjects.Count != 0)
                return Ok(new
                {
                    status = true,
                    data = listOfProjects
                });

            return NotFound(new
            {
                status = false,
                message = "No projects to show."
            });
        }
    }
}