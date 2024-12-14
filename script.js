var a=["Ahmad","Zohaib","Asif","Ghafoor"];

a.toString();

document.write(a+"<br><br>");

//document.write("<br><br>" + a.value0f());

//var b=a.fill("Assss");

//document.write("<br><br>"+b);

a.forEach(loop);

function loop(value,index){
    document.write(index + " : " + value + "<br>");
};

var o={
    fname : 'Ahmad',
    lname: 'Hassaan',
    age:19,
    email:'nostalgia24633@gmail.com',

    salary:function(){
        return 29000;
    }
}
console.log(o);
document.write("<br><br>"+o.salary());
