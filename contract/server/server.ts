// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "server/server.proto" (package "server", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType as MessageType$ } from "@protobuf-ts/runtime";
import { Any } from "../google/protobuf/any";
/**
 * @generated from protobuf message server.Meta
 */
export interface Meta {
    /**
     * @generated from protobuf field: server.MessageType type = 1;
     */
    type: MessageType;
    /**
     * @generated from protobuf field: server.Domain domain = 2;
     */
    domain: Domain;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * @generated from protobuf field: string id = 4;
     */
    id: string;
}
/**
 * @generated from protobuf message server.Request
 */
export interface Request {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 2;
     */
    data?: Any;
}
/**
 * @generated from protobuf message server.CallResponse
 */
export interface CallResponse {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 2;
     */
    data?: Any;
}
/**
 * @generated from protobuf message server.SubscribeRequest
 */
export interface SubscribeRequest {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
}
/**
 * @generated from protobuf message server.UnsubscribeRequest
 */
export interface UnsubscribeRequest {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
}
/**
 * @generated from protobuf message server.SubscribeData
 */
export interface SubscribeData {
    /**
     * @generated from protobuf field: server.SubscribeAction action = 1;
     */
    action: SubscribeAction;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 2;
     */
    data?: Any;
}
/**
 * @generated from protobuf message server.SubscribeResponse
 */
export interface SubscribeResponse {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
    /**
     * @generated from protobuf field: server.SubscribeData data = 2;
     */
    data?: SubscribeData;
}
/**
 * @generated from protobuf enum server.MessageType
 */
export enum MessageType {
    /**
     * @generated from protobuf enum value: Call = 0;
     */
    Call = 0,
    /**
     * @generated from protobuf enum value: CallSuccess = 1;
     */
    CallSuccess = 1,
    /**
     * @generated from protobuf enum value: CallError = 2;
     */
    CallError = 2,
    /**
     * @generated from protobuf enum value: Subscribe = 3;
     */
    Subscribe = 3,
    /**
     * @generated from protobuf enum value: SubscribeError = 4;
     */
    SubscribeError = 4,
    /**
     * @generated from protobuf enum value: Unsubscribe = 5;
     */
    Unsubscribe = 5,
    /**
     * @generated from protobuf enum value: Event = 6;
     */
    Event = 6
}
/**
 * @generated from protobuf enum server.Domain
 */
export enum Domain {
    /**
     * @generated from protobuf enum value: Users = 0;
     */
    Users = 0
}
/**
 * @generated from protobuf enum server.SubscribeAction
 */
export enum SubscribeAction {
    /**
     * @generated from protobuf enum value: Init = 0;
     */
    Init = 0,
    /**
     * @generated from protobuf enum value: Create = 1;
     */
    Create = 1,
    /**
     * @generated from protobuf enum value: Update = 2;
     */
    Update = 2,
    /**
     * @generated from protobuf enum value: Delete = 3;
     */
    Delete = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class Meta$Type extends MessageType$<Meta> {
    constructor() {
        super("server.Meta", [
            { no: 1, name: "type", kind: "enum", T: () => ["server.MessageType", MessageType] },
            { no: 2, name: "domain", kind: "enum", T: () => ["server.Domain", Domain] },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Meta>): Meta {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = 0;
        message.domain = 0;
        message.name = "";
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<Meta>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Meta): Meta {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.MessageType type */ 1:
                    message.type = reader.int32();
                    break;
                case /* server.Domain domain */ 2:
                    message.domain = reader.int32();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* string id */ 4:
                    message.id = reader.string();
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
    internalBinaryWrite(message: Meta, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.MessageType type = 1; */
        if (message.type !== 0)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* server.Domain domain = 2; */
        if (message.domain !== 0)
            writer.tag(2, WireType.Varint).int32(message.domain);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.name);
        /* string id = 4; */
        if (message.id !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.Meta
 */
export const Meta = new Meta$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Request$Type extends MessageType$<Request> {
    constructor() {
        super("server.Request", [
            { no: 1, name: "meta", kind: "message", T: () => Meta },
            { no: 2, name: "data", kind: "message", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<Request>): Request {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Request>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Request): Request {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.Meta meta */ 1:
                    message.meta = Meta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
                    break;
                case /* google.protobuf.Any data */ 2:
                    message.data = Any.internalBinaryRead(reader, reader.uint32(), options, message.data);
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
    internalBinaryWrite(message: Request, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.Meta meta = 1; */
        if (message.meta)
            Meta.internalBinaryWrite(message.meta, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any data = 2; */
        if (message.data)
            Any.internalBinaryWrite(message.data, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.Request
 */
export const Request = new Request$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallResponse$Type extends MessageType$<CallResponse> {
    constructor() {
        super("server.CallResponse", [
            { no: 1, name: "meta", kind: "message", T: () => Meta },
            { no: 2, name: "data", kind: "message", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<CallResponse>): CallResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CallResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallResponse): CallResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.Meta meta */ 1:
                    message.meta = Meta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
                    break;
                case /* google.protobuf.Any data */ 2:
                    message.data = Any.internalBinaryRead(reader, reader.uint32(), options, message.data);
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
    internalBinaryWrite(message: CallResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.Meta meta = 1; */
        if (message.meta)
            Meta.internalBinaryWrite(message.meta, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any data = 2; */
        if (message.data)
            Any.internalBinaryWrite(message.data, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.CallResponse
 */
export const CallResponse = new CallResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubscribeRequest$Type extends MessageType$<SubscribeRequest> {
    constructor() {
        super("server.SubscribeRequest", [
            { no: 1, name: "meta", kind: "message", T: () => Meta }
        ]);
    }
    create(value?: PartialMessage<SubscribeRequest>): SubscribeRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SubscribeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeRequest): SubscribeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.Meta meta */ 1:
                    message.meta = Meta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
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
    internalBinaryWrite(message: SubscribeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.Meta meta = 1; */
        if (message.meta)
            Meta.internalBinaryWrite(message.meta, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.SubscribeRequest
 */
export const SubscribeRequest = new SubscribeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnsubscribeRequest$Type extends MessageType$<UnsubscribeRequest> {
    constructor() {
        super("server.UnsubscribeRequest", [
            { no: 1, name: "meta", kind: "message", T: () => Meta }
        ]);
    }
    create(value?: PartialMessage<UnsubscribeRequest>): UnsubscribeRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<UnsubscribeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnsubscribeRequest): UnsubscribeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.Meta meta */ 1:
                    message.meta = Meta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
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
    internalBinaryWrite(message: UnsubscribeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.Meta meta = 1; */
        if (message.meta)
            Meta.internalBinaryWrite(message.meta, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.UnsubscribeRequest
 */
export const UnsubscribeRequest = new UnsubscribeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubscribeData$Type extends MessageType$<SubscribeData> {
    constructor() {
        super("server.SubscribeData", [
            { no: 1, name: "action", kind: "enum", T: () => ["server.SubscribeAction", SubscribeAction] },
            { no: 2, name: "data", kind: "message", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<SubscribeData>): SubscribeData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.action = 0;
        if (value !== undefined)
            reflectionMergePartial<SubscribeData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeData): SubscribeData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.SubscribeAction action */ 1:
                    message.action = reader.int32();
                    break;
                case /* google.protobuf.Any data */ 2:
                    message.data = Any.internalBinaryRead(reader, reader.uint32(), options, message.data);
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
    internalBinaryWrite(message: SubscribeData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.SubscribeAction action = 1; */
        if (message.action !== 0)
            writer.tag(1, WireType.Varint).int32(message.action);
        /* google.protobuf.Any data = 2; */
        if (message.data)
            Any.internalBinaryWrite(message.data, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.SubscribeData
 */
export const SubscribeData = new SubscribeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubscribeResponse$Type extends MessageType$<SubscribeResponse> {
    constructor() {
        super("server.SubscribeResponse", [
            { no: 1, name: "meta", kind: "message", T: () => Meta },
            { no: 2, name: "data", kind: "message", T: () => SubscribeData }
        ]);
    }
    create(value?: PartialMessage<SubscribeResponse>): SubscribeResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SubscribeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubscribeResponse): SubscribeResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.Meta meta */ 1:
                    message.meta = Meta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
                    break;
                case /* server.SubscribeData data */ 2:
                    message.data = SubscribeData.internalBinaryRead(reader, reader.uint32(), options, message.data);
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
    internalBinaryWrite(message: SubscribeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.Meta meta = 1; */
        if (message.meta)
            Meta.internalBinaryWrite(message.meta, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* server.SubscribeData data = 2; */
        if (message.data)
            SubscribeData.internalBinaryWrite(message.data, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.SubscribeResponse
 */
export const SubscribeResponse = new SubscribeResponse$Type();
/**
 * @generated ServiceType for protobuf service server.Server
 */
export const Server = new ServiceType("server.Server", [
    { name: "Call", options: {}, I: Request, O: CallResponse },
    { name: "Subscribe", options: {}, I: Request, O: SubscribeResponse },
    { name: "UnSubscribe", options: {}, I: UnsubscribeRequest, O: Any }
]);