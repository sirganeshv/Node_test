#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Number;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}

void Test(const FunctionCallbackInfo<Value>& args) {
	int32_t a = 3;
	int32_t b = 4;
	Isolate* isolate = args.GetIsolate();
	Local<Number> num = Number::New(isolate, (a+b));
    args.GetReturnValue().Set(num);
}
	
 void add(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();


        double value = args[0]->NumberValue() + args[1]->NumberValue();
        Local<Number> num = Number::New(isolate, value);

        args.GetReturnValue().Set(num);
    }
void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
  NODE_SET_METHOD(exports, "test", Test);
  NODE_SET_METHOD(exports,"add",add);
}

NODE_MODULE(demo, init)

}  // namespace demo
