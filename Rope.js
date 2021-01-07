class Rope {

    constructor(body1,point){

        var options = {
            bodyA : body1,
            pointB : point,
            stiffness : 0.04,
            length : 10

        }

        this.body1 = body1;
        this.pointB = point;

        this.rope = Constraint.create(options)
        World.add(world,this.rope)


    }
    display(){

        var pointA = this.body1.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }

}