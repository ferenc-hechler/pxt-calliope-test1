#include "pxt.h"

namespace custom {


//% shim=custom::fib
int fib(int n) {
    uBit.serial.send("fib called\r\n");
	return 127;
}

//% shim=custom::foo
void foo(StringData* s, int f, int e) {
    uBit.serial.send("foo called\r\n");
    ManagedString str(s);
    uBit.serial.send(str);
    uBit.serial.send("foo finished\r\n");
}


}
