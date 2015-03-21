using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BuzzHub.Models;
using BuzzHub;
using System.Linq.Expressions;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Text;
using System.Collections.ObjectModel;

namespace BuzzHub.Repository
{
    public class CoffeeRepository : ICoffeeRepository
    {
        private CoffeeContext _dbContext;

        public CoffeeRepository() 
        {
            _dbContext = new CoffeeContext();
            _dbContext.Coffees.Load();
        }

        public CoffeeContext Context() 
        {
            return _dbContext;
        }

        public void SaveChanges() 
        {
            _dbContext.SaveChanges();
        }

        public DbSet<Coffee> GetDbSet() 
        {
            return _dbContext.Coffees;
        }

        //public List<Coffee> AllCoffees(string id) 
        //{
        //    var qu = from c in _dbContext.Coffees
        //             where c.UserId == id
        //             select c;

        //    return qu.ToList<Coffee>();
        //}

        public int GetCount() 
        {
            return _dbContext.Coffees.Count<Coffee>();
        }

        public void Add(Coffee C) 
        {
            //var foo = C;
            _dbContext.Coffees.Add(C);
            _dbContext.SaveChanges();
        }

        public void Delete(Coffee C) 
        {
            _dbContext.Coffees.Remove(C);
            _dbContext.SaveChanges();
        }

        public void Clear() 
        {
            var a = this.All();
            _dbContext.Coffees.RemoveRange(a);
            _dbContext.SaveChanges();
        }

        public IEnumerable<Coffee> PastCoffees() 
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Coffee> All() 
        {
            var qu = from Coffee in _dbContext.Coffees
                     select Coffee;
            return qu.ToList<Coffee>();
        }

        //public Coffee GetById(int id) 
        //{
        //    var query = from Coffee in _dbContext.Coffees
        //                where Coffee.CoffeeId == id
        //                select Coffee;
        //    return query.First<Coffee>();
        //}

        //public Coffee GetUserById(string id)
        //{
        //    var query = from Coffee in _dbContext.Coffees
        //                where Coffee.UserId == id
        //                select Coffee;
        //    return query.First<Coffee>();
        //}

        //public int GetUserIdByName(string userName)
        //{
        //    var query = from UserHash in _dbContext.Coffees
        //                where UserHash.userName == userName
        //                select UserHash;
        //    return query.First<Person>().ID;
        //}

        public Coffee GetByShop(string shop) 
        {
            var query = from Coffee in _dbContext.Coffees
                        where Coffee.Shop == shop
                        select Coffee;
            return query.First<Coffee>();
        }

        public Coffee GetByDrink(string drink) 
        {
            var query = from Coffee in _dbContext.Coffees
                        where Coffee.Drink == drink
                        select Coffee;
            return query.First<Coffee>();
        }

        public Coffee GetByRating(int rating) 
        {
            var query = from Coffee in _dbContext.Coffees
                        where Coffee.Rating == rating
                        select Coffee;
            return query.First<Coffee>();
        }

        public Coffee GetByDate(string date) 
        { 
            var query = from Coffee in _dbContext.Coffees
                        where Coffee.Date == date
                        select Coffee;
            return query.First<Coffee>();
        }

        public Coffee GetByComment(string comment) 
        {
            var query = from Coffee in _dbContext.Coffees
                        where Coffee.Comment == comment
                        select Coffee;
            return query.First<Coffee>();
        }

        public Coffee GetByImagePath(string imgPath) 
        {
            var query = from Coffee in _dbContext.Coffees
                        where Coffee.ImagePath == imgPath
                        select Coffee;
            return query.First<Coffee>();
        }

        public IQueryable<Coffee> SearchFor(Expression<Func<Coffee, bool>> predicate) 
        {
            throw new NotImplementedException();
        }

        public void Dispose() 
        {
            _dbContext.Dispose();
        }
        
    }
}