export abstract class Component{
    private nombre:string;
    
    constructor(name:string,){
        this.nombre = name;
    }
    abstract direccion(): void;
    getname():string {
        return this.nombre;
    }
    
}
export class carpeta extends Component{
    private elementos: Component[];
    constructor(tname:string,tele:Component[]){
        super(tname);
        this.elementos = tele;
    }
    direccion():void{
        console.log("/",super.getname, '/');
    }
    getcantidad():number{
        let rta = this.elementos.length;
        return (rta);
    }
}

export class archivo extends Component{
    private extension:string;
    constructor(tname:string,ext:string){
        super(tname);
        this.extension = ext;
    }
    direccion():void{
        console.log("/",super.getname(),".",this.extension, '/');
    }
    getext():string{
        return this.extension;
    }
}