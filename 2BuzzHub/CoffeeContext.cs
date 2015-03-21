using BuzzHub.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BuzzHub
{
    public class CoffeeContext : DbContext
    {
        public DbSet<Coffee> Coffees { get; set; }
    }
}