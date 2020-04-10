function loader(){
    var str = 'test string';
    console.log(str); 
    str = str.replace(str[0],str[0].toUpperCase());
    console.log(str);
}
module.exports =loader;


