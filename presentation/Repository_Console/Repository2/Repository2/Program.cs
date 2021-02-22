using System;

namespace Repository2
{
    class Program
    {
        static void Main(string[] args)
        {
            IRepository<Person> repository = new PersonRepository();
            repository.Read();
            repository.Add(new Person(6,"Julie"));
            Console.WriteLine("Ajout de Julie");
            Console.ReadKey();
            repository.Read();
            repository.Delete(new Person(6, "Julie"));
            Console.WriteLine("Suppression de Julie");
            Console.ReadKey();
            repository.Read();
            repository.Update(1, new Person(1, "George"));
            Console.WriteLine("Modification de a première entré par George");
            Console.ReadKey();
            repository.Read();
        }
    }
}
