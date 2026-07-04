using Microsoft.AspNetCore.Authorization;
using FirstWebApi.Filters;
using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin,POC")]
    //[CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> employees;

        public EmployeeController()
        {
            employees = GetStandardEmployeeList();
        }

        [HttpGet]
[ProducesResponseType(StatusCodes.Status200OK)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public ActionResult<List<Employee>> Get()
{
    //throw new Exception("This is a custom exception.");

    return Ok(employees);
}

        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut("{id}")]
public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
{
    // Check if id is valid
    if (id <= 0)
    {
        return BadRequest("Invalid employee id");
    }

    // Find employee
    var emp = employees.FirstOrDefault(e => e.Id == id);

    if (emp == null)
    {
        return BadRequest("Invalid employee id");
    }

    // Update employee details
    emp.Name = employee.Name;
    emp.Salary = employee.Salary;
    emp.Permanent = employee.Permanent;
    emp.Department = employee.Department;
    emp.Skills = employee.Skills;
    emp.DateOfBirth = employee.DateOfBirth;

    return Ok(emp);
}

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Sneha",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(2003,5,12),
                    Department = new Department
                    {
                        Id = 101,
                        Name = "IT"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill{ Id=1, Name="C#" },
                        new Skill{ Id=2, Name="SQL" }
                    }
                },

                new Employee
                {
                    Id = 2,
                    Name = "Rahul",
                    Salary = 45000,
                    Permanent = false,
                    DateOfBirth = new DateTime(2002,8,15),
                    Department = new Department
                    {
                        Id = 102,
                        Name = "HR"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill{ Id=3, Name="Java" }
                    }
                }
            };
        }
    }
}