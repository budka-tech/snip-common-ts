import { Push } from "./push";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service gsm.Push
 */
export class PushClient {
    _transport;
    typeName = Push.typeName;
    methods = Push.methods;
    options = Push.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: Now(gsm.NowRequest) returns (gsm.CommonResponse);
     */
    now(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Schedule(gsm.ScheduleRequest) returns (gsm.CommonResponse);
     */
    schedule(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
