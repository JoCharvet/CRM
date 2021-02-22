using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Repository2
{
  
    public  class Person 
    {
        public int Id { get; set; }

        
        public string name { get; set; }

        public Person(int Id,string name)
        {
            this.Id = Id;
            this.name = name;
        }

    }
}
