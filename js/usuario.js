class usuario{
    nombre;

    //  mutadores
    setNombre(nombre){this.nombre=nombre;}

    // accesador
    getNombre(){return this.nombre;}

    // toString()
    imprimir(){
        return 'Nombre: ' +this.nombre;
    }
}