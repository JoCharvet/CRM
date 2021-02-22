using System;

namespace Repository2
{
    class Program
    {
        static void Main(string[] args)
        {
            IRepository<Person> repository = new PersonRepository();
            repository.Read();
            Person julie = new Person(6, "Julie");
            repository.Add(julie);
            Console.WriteLine("Ajout de Julie");
            Console.ReadKey();
            repository.Read();
            repository.Delete(julie);
            Console.WriteLine("Suppression de Julie");
            Console.ReadKey();
            repository.Read();
            repository.Update(1, new Person(1, "George"));
            Console.WriteLine("Modification de la première entrée par George");
            Console.ReadKey();
            repository.Read();
        }
    }
}
