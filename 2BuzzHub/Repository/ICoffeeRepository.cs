using BuzzHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace BuzzHub.Repository
{
    public interface ICoffeeRepository
    {
        int GetCount();
        void Add(Coffee C);
        void Delete(Coffee C);
        void DeleteCoffee(int id);
        void Clear();
        IEnumerable<Coffee> PastCoffees();
        IEnumerable<Coffee> All();
       // Coffee GetById(int id);
        Coffee GetByShop(string shop);
        Coffee GetByDrink(string drink);
        Coffee GetByRating(int rating);
        Coffee GetByDate(string date);
        Coffee GetByComment(string comment);
        Coffee GetByImagePath(string imgPath);
        IQueryable<Coffee> SearchFor(Expression<Func<Coffee, bool>> predicate);
    }
}