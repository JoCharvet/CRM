using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;


namespace Repository2
{
    class PersonRepository : IRepository<Person>
    {
        // accsès au données
        List<Person> persons = new List<Person>();

        public PersonRepository()
        {
            persons.Add(new Person(1, "Jaques"));
            persons.Add(new Person(2, "Jean"));
            persons.Add(new Person(3, "James"));
            persons.Add(new Person(4, "Jamie"));
            persons.Add(new Person(5, "Juliette"));
        }
        /// <summary>
        /// Differentes méthodes du CRUD  imposé par l'interface IRepository
        /// </summary>
        public void Read()
        {
            
                foreach (Person person in persons)
                {
                Console.WriteLine(person.Id + " " + person.name);
                }
  
        }

        public void Add(Person p)
        {
            p.Id = persons.Count() + 1;
            persons.Add(p);       
        }

        public void Delete(Person p)
        {
            persons.Remove(p);
        }

        public void Update(int pId , Person np)
        {
            persons.FirstOrDefault(p => p.Id == pId).name = np.name;

        }

        public void FindById(int Id)
        {
            
            foreach (Person person in persons)
            {
                if(person.Id == Id)
                {
                    Console.WriteLine(person.Id + " " + person.name);
                }
                           
            }
           
            
        }
    }
}
