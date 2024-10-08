// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "gsm/gsm.proto" (package "gsm", syntax proto3)
// tslint:disable
import { Response } from "../common/common";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message gsm.SendSmsRequest
 */
export interface SendSmsRequest {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
    /**
     * @generated from protobuf field: string phone = 2;
     */
    phone: string;
}
/**
 * @generated from protobuf message gsm.FlashCallRequest
 */
export interface FlashCallRequest {
    /**
     * @generated from protobuf field: string phone = 1;
     */
    phone: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class SendSmsRequest$Type extends MessageType<SendSmsRequest> {
    constructor() {
        super("gsm.SendSmsRequest", [
            { no: 1, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "phone", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SendSmsRequest>): SendSmsRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.message = "";
        message.phone = "";
        if (value !== undefined)
            reflectionMergePartial<SendSmsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendSmsRequest): SendSmsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string message */ 1:
                    message.message = reader.string();
                    break;
                case /* string phone */ 2:
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
    internalBinaryWrite(message: SendSmsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string message = 1; */
        if (message.message !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.message);
        /* string phone = 2; */
        if (message.phone !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.phone);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message gsm.SendSmsRequest
 */
export const SendSmsRequest = new SendSmsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FlashCallRequest$Type extends MessageType<FlashCallRequest> {
    constructor() {
        super("gsm.FlashCallRequest", [
            { no: 1, name: "phone", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<FlashCallRequest>): FlashCallRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.phone = "";
        if (value !== undefined)
            reflectionMergePartial<FlashCallRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FlashCallRequest): FlashCallRequest {
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
    internalBinaryWrite(message: FlashCallRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message gsm.FlashCallRequest
 */
export const FlashCallRequest = new FlashCallRequest$Type();
/**
 * @generated ServiceType for protobuf service gsm.Gsm
 */
export const Gsm = new ServiceType("gsm.Gsm", [
    { name: "SendSms", options: {}, I: SendSmsRequest, O: Response },
    { name: "FlashCall", options: {}, I: FlashCallRequest, O: Response }
]);
