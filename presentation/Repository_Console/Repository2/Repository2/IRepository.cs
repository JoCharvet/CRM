using System;
using System.Collections.Generic;
using System.Text;

namespace Repository2
{
    interface IRepository<T> where T:Person
    {
        // contrat CRUD
        void Read();
        void Add(T p);
        void Delete(T p);
        void Update(int id ,T np);
        void  FindById(int Id);
    }
    
}
