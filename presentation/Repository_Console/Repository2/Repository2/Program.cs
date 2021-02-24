using System;

namespace Repository2
{
    class Program
    {
        static void Main(string[] args)
        {
            //on instancie le repository
            IRepository<Person> repository = new PersonRepository();

            //on affiche le contenu de la source de donnée
            repository.Read();
            Person julie = new Person(6, "Julie");

            //on ajoute une nouvelle Person à la source de donnée
            repository.Add(julie);
            Console.WriteLine("Ajout de Julie");
            Console.ReadKey();
            repository.Read();
            //on supprime une Person de la source de donnée
            repository.Delete(julie);
            Console.WriteLine("Suppression de Julie");
            Console.ReadKey();
            repository.Read();
            //on met a jour une personne de la source de donnée
            repository.Update(1, new Person(1, "George"));
            Console.WriteLine("Modification de la première entrée par George");
            Console.ReadKey();
            repository.Read();
        }
    }
}
