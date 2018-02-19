#include <node.h>
#include <iostream>
#include<string>

namespace demo1 {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Number;
using v8::Value;

void printname(const FunctionCallbackInfo<Value>& args) {
	//Isolate* isolate = args.GetIsolate();
	//double value = args[0]->NumberValue() + args[1]->NumberValue();
    //Local<Number> num = Number::New(isolate, value);
	//args.GetReturnValue().Set(num);
	//args[0]->StringValue();
	v8::String::Utf8Value param1(args[0]->ToString());
	std::string foo = std::string(*param1);
	std::cout<<"The name is  "<<foo<<"\n";
	//args.GetReturnValue().Set();*/
	Isolate* isolate = args.GetIsolate();
	std::cout<<"hello";
	//args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));

}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "printname", printname);
}

NODE_MODULE(demo1, init)

}  // namespace demo
