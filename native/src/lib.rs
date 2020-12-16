use neon::prelude::*;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

fn open(mut cx: FunctionContext) -> JsResult<JsString> {
    std::fs::File::create("foo.txt").unwrap();
    Ok(cx.string("create file."))
}

register_module!(mut cx, {
   cx.export_function("hello", hello)?;
   cx.export_function("open", open)
});
