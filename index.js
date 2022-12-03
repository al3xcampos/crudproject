class persona {
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido   
    }
}
get nombre(){
    return this.nombre +" "+ this.apellido
}