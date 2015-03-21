using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BuzzHub.Models
{
    public class Coffee
    {
        //public string UserId { get; set; }
        [Key]
        public int CoffeeId { get; set; }
        public string Shop { get; set; }
        public string Drink { get; set; }
        public int Rating { get; set; }
        public string Date { get; set; }
        public string Comment { get; set; }
        public string ImagePath { get; set; }

        public Coffee() 
        { 
            //placeholder
        }

        public Coffee(string CoffeeShop, string CoffeeDrink, int CoffeeRating, string CoffeeDate, string CoffeeComment, string CoffeeImagePath) 
        {
            this.Shop = CoffeeShop;
            this.Drink = CoffeeDrink;
            this.Rating = CoffeeRating;
            this.Date = CoffeeDate;
            this.Comment = CoffeeComment;
            this.ImagePath = CoffeeImagePath;
        }
    
        
    
    }

    
}