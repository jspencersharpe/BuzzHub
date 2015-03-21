namespace _2BuzzHub.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NewProj : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Coffees",
                c => new
                    {
                        CoffeeId = c.Int(nullable: false, identity: true),
                        Shop = c.String(),
                        Drink = c.String(),
                        Rating = c.Int(nullable: false),
                        Date = c.String(),
                        Comment = c.String(),
                        ImagePath = c.String(),
                    })
                .PrimaryKey(t => t.CoffeeId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Coffees");
        }
    }
}
