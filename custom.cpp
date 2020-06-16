#include "pxt.h"

namespace custom {

//% shim=custom::fib
int fib(int n) {
    uBit.serial.send("fib called\r\n");
	return 2*n;
}

}
