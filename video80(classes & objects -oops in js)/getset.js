class User{
    constructor(){
        this.name=name
    }
 get name(){
  return this._name
 }

set name(value){
    if(value.length<4){
        console.log("name is too short")
    return
}
this._name=value
}
}
let user=new User("jovioye")
console.log(user.name)
user.name="jerry"
console.log(user.name)
