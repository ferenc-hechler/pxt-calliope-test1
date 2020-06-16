/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two,
    //% block="three"
    Three
}

/**
 * Benutzerdefinierte Blöcke
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
	
    /**
     * TODO: Beschreibe deine Funktion hier
     * @param s Beschreibe die Parameter hier, eg: "Hello"
     * @param f Beschreibe die Parameter hier, eg: 5
     * @param e Beschreibe die Parameter hier
     */    
    //% block
    //% shim=custom::foo
    export function foo(s: string, f: number, e: MyEnum): void {
        basic.showString("sim:foo 127")
    }

    /**
     * TODO: Beschreibe deine Funktion hier
     * @param id1 Beschreibe die Parameter hier, eg: 3
     * @param arr Beschreibe die Parameter hier, eg: [6,6]
     * @param id2 Beschreibe die Parameter hier, eg: 2
     */    
    //% block
    export function initnums(id1: number, arr: number[], id2: number): void {
    	basic.showString("sim:initnums")
    }


    /**
     * TODO: Beschreibe deine Funktion hier
     * @param value Beschreibe den Wert hier, eg: 5
     */    
    //% block
    //% shim=custom::fib
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
