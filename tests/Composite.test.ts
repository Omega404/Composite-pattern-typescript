import { expect } from 'chai';
import {carpeta} from '../src/Composite';
import {archivo} from '../src/Composite';

let a1 = new archivo('a1','txt');
let a2 = new archivo('a2','txt');
let a3 = new archivo('a1','mp4');
let ar = [a1,a2,a3]
let c1 = new carpeta ('c1',ar);

describe('tarea', function(){
    it('Cant de elementos',function(){
        let result = c1.getcantidad();
        expect(result).equal(3);
    })
    it('extension',function(){
        let result = a3.getext();
        expect(result).equal('mp4');
    })
    it('direccion',function(){
        let result = a1.getname();
        expect(result).equal('a1');
    })
})