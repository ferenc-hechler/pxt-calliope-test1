#include "pxt.h"

namespace custom {

//% shim=custom::foo
void foo(StringData* s, int f, int e): void {
    uBit.serial.send("foo called\r\n");
}


//% shim=custom::fib
int fib(int n) {
    uBit.serial.send("fib called\r\n");
	return 2*n;
}

}
