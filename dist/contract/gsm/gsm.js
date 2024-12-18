// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "gsm/gsm.proto" (package "gsm", syntax proto3)
// tslint:disable
import { Response } from "../common/common";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum gsm.Method
 */
export var Method;
(function (Method) {
    /**
     * @generated from protobuf enum value: NULL = 0;
     */
    Method[Method["NULL"] = 0] = "NULL";
    /**
     * @generated from protobuf enum value: FlASH_CALL = 1;
     */
    Method[Method["FlASH_CALL"] = 1] = "FlASH_CALL";
    /**
     * @generated from protobuf enum value: FlASH_CALL_BACK = 2;
     */
    Method[Method["FlASH_CALL_BACK"] = 2] = "FlASH_CALL_BACK";
})(Method || (Method = {}));
// @generated message type with reflection information, may provide speed optimized methods
class FlashCallRequest$Type extends MessageType {
    constructor() {
        super("gsm.FlashCallRequest", [
            { no: 1, name: "phone", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "code", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.phone = "";
        message.code = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string phone */ 1:
                    message.phone = reader.string();
                    break;
                case /* string code */ 2:
                    message.code = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string phone = 1; */
        if (message.phone !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.phone);
        /* string code = 2; */
        if (message.code !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.code);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message gsm.FlashCallRequest
 */
export const FlashCallRequest = new FlashCallRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FlashCallBackRequest$Type extends MessageType {
    constructor() {
        super("gsm.FlashCallBackRequest", [
            { no: 1, name: "phone", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.phone = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string phone */ 1:
                    message.phone = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string phone = 1; */
        if (message.phone !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.phone);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message gsm.FlashCallBackRequest
 */
export const FlashCallBackRequest = new FlashCallBackRequest$Type();
/**
 * @generated ServiceType for protobuf service gsm.Gsm
 */
export const Gsm = new ServiceType("gsm.Gsm", [
    { name: "FlashCall", options: {}, I: FlashCallRequest, O: Response },
    { name: "FlashCallBack", options: {}, I: FlashCallBackRequest, O: Response }
]);
