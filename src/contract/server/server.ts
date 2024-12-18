// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "server/server.proto" (package "server", syntax proto3)
// tslint:disable
import { Empty } from "../google/protobuf/empty";
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
     * @generated from protobuf field: uint32 method = 3;
     */
    method: number;
    /**
     * @generated from protobuf field: uint32 id = 4;
     */
    id: number;
}
/**
 * @generated from protobuf message server.ParamsRequest
 */
export interface ParamsRequest {
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
 * @generated from protobuf message server.Response
 */
export interface Response {
    /**
     * @generated from protobuf field: server.Meta meta = 1;
     */
    meta?: Meta;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 3;
     */
    data?: Any;
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
 * @generated from protobuf enum server.MessageType
 */
export enum MessageType {
    /**
     * @generated from protobuf enum value: Null0 = 0;
     */
    Null0 = 0,
    /**
     * @generated from protobuf enum value: Call = 1;
     */
    Call = 1,
    /**
     * @generated from protobuf enum value: Subscribe = 2;
     */
    Subscribe = 2,
    /**
     * @generated from protobuf enum value: Unsubscribe = 3;
     */
    Unsubscribe = 3,
    /**
     * @generated from protobuf enum value: Event = 4;
     */
    Event = 4
}
/**
 * @generated from protobuf enum server.Domain
 */
export enum Domain {
    /**
     * @generated from protobuf enum value: Null1 = 0;
     */
    Null1 = 0,
    /**
     * @generated from protobuf enum value: Socket = 1;
     */
    Socket = 1,
    /**
     * @generated from protobuf enum value: Auth = 2;
     */
    Auth = 2,
    /**
     * @generated from protobuf enum value: Users = 3;
     */
    Users = 3,
    /**
     * @generated from protobuf enum value: Assist = 4;
     */
    Assist = 4,
    /**
     * @generated from protobuf enum value: Gsm = 5;
     */
    Gsm = 5
}
/**
 * @generated from protobuf enum server.SubscribeAction
 */
export enum SubscribeAction {
    /**
     * @generated from protobuf enum value: Null2 = 0;
     */
    Null2 = 0,
    /**
     * @generated from protobuf enum value: Init = 1;
     */
    Init = 1,
    /**
     * @generated from protobuf enum value: Create = 2;
     */
    Create = 2,
    /**
     * @generated from protobuf enum value: Update = 3;
     */
    Update = 3,
    /**
     * @generated from protobuf enum value: Delete = 4;
     */
    Delete = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class Meta$Type extends MessageType$<Meta> {
    constructor() {
        super("server.Meta", [
            { no: 1, name: "type", kind: "enum", T: () => ["server.MessageType", MessageType] },
            { no: 2, name: "domain", kind: "enum", T: () => ["server.Domain", Domain] },
            { no: 3, name: "method", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<Meta>): Meta {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.type = 0;
        message.domain = 0;
        message.method = 0;
        message.id = 0;
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
                case /* uint32 method */ 3:
                    message.method = reader.uint32();
                    break;
                case /* uint32 id */ 4:
                    message.id = reader.uint32();
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
        /* uint32 method = 3; */
        if (message.method !== 0)
            writer.tag(3, WireType.Varint).uint32(message.method);
        /* uint32 id = 4; */
        if (message.id !== 0)
            writer.tag(4, WireType.Varint).uint32(message.id);
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
class ParamsRequest$Type extends MessageType$<ParamsRequest> {
    constructor() {
        super("server.ParamsRequest", [
            { no: 1, name: "meta", kind: "message", T: () => Meta },
            { no: 2, name: "data", kind: "message", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<ParamsRequest>): ParamsRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ParamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsRequest): ParamsRequest {
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
    internalBinaryWrite(message: ParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message server.ParamsRequest
 */
export const ParamsRequest = new ParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Response$Type extends MessageType$<Response> {
    constructor() {
        super("server.Response", [
            { no: 1, name: "meta", kind: "message", T: () => Meta },
            { no: 2, name: "status", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "data", kind: "message", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<Response>): Response {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.status = 0;
        if (value !== undefined)
            reflectionMergePartial<Response>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Response): Response {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* server.Meta meta */ 1:
                    message.meta = Meta.internalBinaryRead(reader, reader.uint32(), options, message.meta);
                    break;
                case /* uint32 status */ 2:
                    message.status = reader.uint32();
                    break;
                case /* google.protobuf.Any data */ 3:
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
    internalBinaryWrite(message: Response, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* server.Meta meta = 1; */
        if (message.meta)
            Meta.internalBinaryWrite(message.meta, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 status = 2; */
        if (message.status !== 0)
            writer.tag(2, WireType.Varint).uint32(message.status);
        /* google.protobuf.Any data = 3; */
        if (message.data)
            Any.internalBinaryWrite(message.data, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message server.Response
 */
export const Response = new Response$Type();
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
/**
 * @generated ServiceType for protobuf service server.Server
 */
export const Server = new ServiceType("server.Server", [
    { name: "Request", options: {}, I: ParamsRequest, O: Empty }
]);