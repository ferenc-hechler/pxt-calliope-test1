#include "pxt.h"

namespace custom {


//% shim=custom::fib
int fib(int n) {
    uBit.serial.send("fib called\r\n");
	return 129;
}

//% shim=custom::initnums
void initnums(int inputs, RefCollection &hidden, int outputs) {
    uBit.serial.send("initnums called\r\n");
}

//% block
export function initnums(id1: number, arr: number[], id2: number): void {


//% shim=custom::foo
void foo(StringData* s, int f, int e) {
    uBit.serial.send("foo called\r\n");
    ManagedString str(s);
    uBit.serial.send(str);
    uBit.serial.send("foo finished\r\n");
}


}
