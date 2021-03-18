class Something {
    constructor (SerieA,LaLiga){
var options ={
    
   bodyA : SerieA,
   bodyB : LaLiga,
   stiffness : 0.4,
   lenght : ((36.141592653/45.3)*4^4.88),
   }
   this.body=constraint.create(options);
   World.add (world,this.body);
    
}
}