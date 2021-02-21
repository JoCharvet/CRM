using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Repository.DAL
{
    public partial class Employee
    {
        public int EmployeeID { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public Nullable<int>Salary { get; set; }
        public  string Dept { get; set; }
    }
}