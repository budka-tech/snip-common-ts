import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetImagesInBucketResponse } from "./s3";
import type { GetImagesInBucketRequest } from "./s3";
import type { GetAllImagesResponse } from "./s3";
import type { GetAllImagesRequest } from "./s3";
import type { DeleteImageRequest } from "./s3";
import type { GetImageWithBucketResponse } from "./s3";
import type { GetImageWithBucketRequest } from "./s3";
import type { GetImageResponse } from "./s3";
import type { GetImageRequest } from "./s3";
import type { CreateImageResponse } from "./s3";
import type { CreateImageRequest } from "./s3";
import type { GetAllBucketsResponse } from "./s3";
import type { GetAllBucketsRequest } from "./s3";
import type { Response } from "../common/common";
import type { UnregisterBucketRequest } from "./s3";
import type { HasBucketResponse } from "./s3";
import type { HasBucketRequest } from "./s3";
import type { RegisterBucketResponse } from "./s3";
import type { RegisterBucketRequest } from "./s3";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Endpoint service definition
 *
 * @generated from protobuf service s3.Endpoint
 */
export interface IEndpointClient {
    /**
     * @generated from protobuf rpc: RegisterBucket(s3.RegisterBucketRequest) returns (s3.RegisterBucketResponse);
     */
    registerBucket(input: RegisterBucketRequest, options?: RpcOptions): UnaryCall<RegisterBucketRequest, RegisterBucketResponse>;
    /**
     * @generated from protobuf rpc: HasBucket(s3.HasBucketRequest) returns (s3.HasBucketResponse);
     */
    hasBucket(input: HasBucketRequest, options?: RpcOptions): UnaryCall<HasBucketRequest, HasBucketResponse>;
    /**
     * @generated from protobuf rpc: UnregisterBucket(s3.UnregisterBucketRequest) returns (common.Response);
     */
    unregisterBucket(input: UnregisterBucketRequest, options?: RpcOptions): UnaryCall<UnregisterBucketRequest, Response>;
    /**
     * @generated from protobuf rpc: GetAllBuckets(s3.GetAllBucketsRequest) returns (s3.GetAllBucketsResponse);
     */
    getAllBuckets(input: GetAllBucketsRequest, options?: RpcOptions): UnaryCall<GetAllBucketsRequest, GetAllBucketsResponse>;
    /**
     * @generated from protobuf rpc: CreateImage(s3.CreateImageRequest) returns (s3.CreateImageResponse);
     */
    createImage(input: CreateImageRequest, options?: RpcOptions): UnaryCall<CreateImageRequest, CreateImageResponse>;
    /**
     * @generated from protobuf rpc: GetImage(s3.GetImageRequest) returns (s3.GetImageResponse);
     */
    getImage(input: GetImageRequest, options?: RpcOptions): UnaryCall<GetImageRequest, GetImageResponse>;
    /**
     * @generated from protobuf rpc: GetImageWithBucket(s3.GetImageWithBucketRequest) returns (s3.GetImageWithBucketResponse);
     */
    getImageWithBucket(input: GetImageWithBucketRequest, options?: RpcOptions): UnaryCall<GetImageWithBucketRequest, GetImageWithBucketResponse>;
    /**
     * @generated from protobuf rpc: DeleteImage(s3.DeleteImageRequest) returns (common.Response);
     */
    deleteImage(input: DeleteImageRequest, options?: RpcOptions): UnaryCall<DeleteImageRequest, Response>;
    /**
     * @generated from protobuf rpc: GetAllImages(s3.GetAllImagesRequest) returns (s3.GetAllImagesResponse);
     */
    getAllImages(input: GetAllImagesRequest, options?: RpcOptions): UnaryCall<GetAllImagesRequest, GetAllImagesResponse>;
    /**
     * @generated from protobuf rpc: GetImagesInBucket(s3.GetImagesInBucketRequest) returns (s3.GetImagesInBucketResponse);
     */
    getImagesInBucket(input: GetImagesInBucketRequest, options?: RpcOptions): UnaryCall<GetImagesInBucketRequest, GetImagesInBucketResponse>;
}
/**
 * Endpoint service definition
 *
 * @generated from protobuf service s3.Endpoint
 */
export declare class EndpointClient implements IEndpointClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: RegisterBucket(s3.RegisterBucketRequest) returns (s3.RegisterBucketResponse);
     */
    registerBucket(input: RegisterBucketRequest, options?: RpcOptions): UnaryCall<RegisterBucketRequest, RegisterBucketResponse>;
    /**
     * @generated from protobuf rpc: HasBucket(s3.HasBucketRequest) returns (s3.HasBucketResponse);
     */
    hasBucket(input: HasBucketRequest, options?: RpcOptions): UnaryCall<HasBucketRequest, HasBucketResponse>;
    /**
     * @generated from protobuf rpc: UnregisterBucket(s3.UnregisterBucketRequest) returns (common.Response);
     */
    unregisterBucket(input: UnregisterBucketRequest, options?: RpcOptions): UnaryCall<UnregisterBucketRequest, Response>;
    /**
     * @generated from protobuf rpc: GetAllBuckets(s3.GetAllBucketsRequest) returns (s3.GetAllBucketsResponse);
     */
    getAllBuckets(input: GetAllBucketsRequest, options?: RpcOptions): UnaryCall<GetAllBucketsRequest, GetAllBucketsResponse>;
    /**
     * @generated from protobuf rpc: CreateImage(s3.CreateImageRequest) returns (s3.CreateImageResponse);
     */
    createImage(input: CreateImageRequest, options?: RpcOptions): UnaryCall<CreateImageRequest, CreateImageResponse>;
    /**
     * @generated from protobuf rpc: GetImage(s3.GetImageRequest) returns (s3.GetImageResponse);
     */
    getImage(input: GetImageRequest, options?: RpcOptions): UnaryCall<GetImageRequest, GetImageResponse>;
    /**
     * @generated from protobuf rpc: GetImageWithBucket(s3.GetImageWithBucketRequest) returns (s3.GetImageWithBucketResponse);
     */
    getImageWithBucket(input: GetImageWithBucketRequest, options?: RpcOptions): UnaryCall<GetImageWithBucketRequest, GetImageWithBucketResponse>;
    /**
     * @generated from protobuf rpc: DeleteImage(s3.DeleteImageRequest) returns (common.Response);
     */
    deleteImage(input: DeleteImageRequest, options?: RpcOptions): UnaryCall<DeleteImageRequest, Response>;
    /**
     * @generated from protobuf rpc: GetAllImages(s3.GetAllImagesRequest) returns (s3.GetAllImagesResponse);
     */
    getAllImages(input: GetAllImagesRequest, options?: RpcOptions): UnaryCall<GetAllImagesRequest, GetAllImagesResponse>;
    /**
     * @generated from protobuf rpc: GetImagesInBucket(s3.GetImagesInBucketRequest) returns (s3.GetImagesInBucketResponse);
     */
    getImagesInBucket(input: GetImagesInBucketRequest, options?: RpcOptions): UnaryCall<GetImagesInBucketRequest, GetImagesInBucketResponse>;
}
