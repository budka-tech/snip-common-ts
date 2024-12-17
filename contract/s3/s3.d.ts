import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Bucket message
 *
 * @generated from protobuf message s3.Bucket
 */
export interface Bucket {
    /**
     * @generated from protobuf field: string bucket_name = 1;
     */
    bucketName: string;
}
/**
 * Image message
 *
 * @generated from protobuf message s3.Image
 */
export interface Image {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * ImageWithBucket message
 *
 * @generated from protobuf message s3.ImageWithBucket
 */
export interface ImageWithBucket {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
    /**
     * @generated from protobuf field: string bucket_name = 2;
     */
    bucketName: string;
}
/**
 * Request and response messages for each function
 *
 * @generated from protobuf message s3.RegisterBucketRequest
 */
export interface RegisterBucketRequest {
    /**
     * @generated from protobuf field: string bucket_name = 1;
     */
    bucketName: string;
}
/**
 * @generated from protobuf message s3.RegisterBucketResponse
 */
export interface RegisterBucketResponse {
    /**
     * @generated from protobuf field: s3.Bucket bucket = 1;
     */
    bucket?: Bucket;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.HasBucketRequest
 */
export interface HasBucketRequest {
    /**
     * @generated from protobuf field: string bucket_name = 1;
     */
    bucketName: string;
}
/**
 * @generated from protobuf message s3.HasBucketResponse
 */
export interface HasBucketResponse {
    /**
     * @generated from protobuf field: bool exists = 1;
     */
    exists: boolean;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.UnregisterBucketRequest
 */
export interface UnregisterBucketRequest {
    /**
     * @generated from protobuf field: string bucket_name = 1;
     */
    bucketName: string;
}
/**
 * @generated from protobuf message s3.GetAllBucketsRequest
 */
export interface GetAllBucketsRequest {
}
/**
 * @generated from protobuf message s3.GetAllBucketsResponse
 */
export interface GetAllBucketsResponse {
    /**
     * @generated from protobuf field: repeated s3.Bucket buckets = 1;
     */
    buckets: Bucket[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.CreateImageRequest
 */
export interface CreateImageRequest {
    /**
     * @generated from protobuf field: string bucket_name = 1;
     */
    bucketName: string;
    /**
     * @generated from protobuf field: bytes file = 2;
     */
    file: Uint8Array;
    /**
     * @generated from protobuf field: string file_extension = 3;
     */
    fileExtension: string;
    /**
     * @generated from protobuf field: optional float quality = 4;
     */
    quality?: number;
    /**
     * @generated from protobuf field: optional int32 max_size = 5;
     */
    maxSize?: number;
    /**
     * @generated from protobuf field: optional bytes id = 6;
     */
    id?: Uint8Array;
}
/**
 * @generated from protobuf message s3.CreateImageResponse
 */
export interface CreateImageResponse {
    /**
     * @generated from protobuf field: s3.Image image = 1;
     */
    image?: Image;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.GetImageRequest
 */
export interface GetImageRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message s3.GetImageResponse
 */
export interface GetImageResponse {
    /**
     * @generated from protobuf field: s3.Image image = 1;
     */
    image?: Image;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.GetImageWithBucketRequest
 */
export interface GetImageWithBucketRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message s3.GetImageWithBucketResponse
 */
export interface GetImageWithBucketResponse {
    /**
     * @generated from protobuf field: s3.ImageWithBucket image_with_bucket = 1;
     */
    imageWithBucket?: ImageWithBucket;
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.DeleteImageRequest
 */
export interface DeleteImageRequest {
    /**
     * @generated from protobuf field: bytes id = 1;
     */
    id: Uint8Array;
}
/**
 * @generated from protobuf message s3.GetAllImagesRequest
 */
export interface GetAllImagesRequest {
    /**
     * @generated from protobuf field: int32 limit = 1;
     */
    limit: number;
}
/**
 * @generated from protobuf message s3.GetAllImagesResponse
 */
export interface GetAllImagesResponse {
    /**
     * @generated from protobuf field: repeated s3.Image images = 1;
     */
    images: Image[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
/**
 * @generated from protobuf message s3.GetImagesInBucketRequest
 */
export interface GetImagesInBucketRequest {
    /**
     * @generated from protobuf field: string bucket_name = 1;
     */
    bucketName: string;
    /**
     * @generated from protobuf field: int32 limit = 2;
     */
    limit: number;
}
/**
 * @generated from protobuf message s3.GetImagesInBucketResponse
 */
export interface GetImagesInBucketResponse {
    /**
     * @generated from protobuf field: repeated s3.Image images = 1;
     */
    images: Image[];
    /**
     * @generated from protobuf field: uint32 status = 2;
     */
    status: number;
}
declare class Bucket$Type extends MessageType<Bucket> {
    constructor();
    create(value?: PartialMessage<Bucket>): Bucket;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Bucket): Bucket;
    internalBinaryWrite(message: Bucket, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.Bucket
 */
export declare const Bucket: Bucket$Type;
declare class Image$Type extends MessageType<Image> {
    constructor();
    create(value?: PartialMessage<Image>): Image;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Image): Image;
    internalBinaryWrite(message: Image, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.Image
 */
export declare const Image: Image$Type;
declare class ImageWithBucket$Type extends MessageType<ImageWithBucket> {
    constructor();
    create(value?: PartialMessage<ImageWithBucket>): ImageWithBucket;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ImageWithBucket): ImageWithBucket;
    internalBinaryWrite(message: ImageWithBucket, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.ImageWithBucket
 */
export declare const ImageWithBucket: ImageWithBucket$Type;
declare class RegisterBucketRequest$Type extends MessageType<RegisterBucketRequest> {
    constructor();
    create(value?: PartialMessage<RegisterBucketRequest>): RegisterBucketRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterBucketRequest): RegisterBucketRequest;
    internalBinaryWrite(message: RegisterBucketRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.RegisterBucketRequest
 */
export declare const RegisterBucketRequest: RegisterBucketRequest$Type;
declare class RegisterBucketResponse$Type extends MessageType<RegisterBucketResponse> {
    constructor();
    create(value?: PartialMessage<RegisterBucketResponse>): RegisterBucketResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterBucketResponse): RegisterBucketResponse;
    internalBinaryWrite(message: RegisterBucketResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.RegisterBucketResponse
 */
export declare const RegisterBucketResponse: RegisterBucketResponse$Type;
declare class HasBucketRequest$Type extends MessageType<HasBucketRequest> {
    constructor();
    create(value?: PartialMessage<HasBucketRequest>): HasBucketRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HasBucketRequest): HasBucketRequest;
    internalBinaryWrite(message: HasBucketRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.HasBucketRequest
 */
export declare const HasBucketRequest: HasBucketRequest$Type;
declare class HasBucketResponse$Type extends MessageType<HasBucketResponse> {
    constructor();
    create(value?: PartialMessage<HasBucketResponse>): HasBucketResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HasBucketResponse): HasBucketResponse;
    internalBinaryWrite(message: HasBucketResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.HasBucketResponse
 */
export declare const HasBucketResponse: HasBucketResponse$Type;
declare class UnregisterBucketRequest$Type extends MessageType<UnregisterBucketRequest> {
    constructor();
    create(value?: PartialMessage<UnregisterBucketRequest>): UnregisterBucketRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnregisterBucketRequest): UnregisterBucketRequest;
    internalBinaryWrite(message: UnregisterBucketRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.UnregisterBucketRequest
 */
export declare const UnregisterBucketRequest: UnregisterBucketRequest$Type;
declare class GetAllBucketsRequest$Type extends MessageType<GetAllBucketsRequest> {
    constructor();
    create(value?: PartialMessage<GetAllBucketsRequest>): GetAllBucketsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllBucketsRequest): GetAllBucketsRequest;
    internalBinaryWrite(message: GetAllBucketsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetAllBucketsRequest
 */
export declare const GetAllBucketsRequest: GetAllBucketsRequest$Type;
declare class GetAllBucketsResponse$Type extends MessageType<GetAllBucketsResponse> {
    constructor();
    create(value?: PartialMessage<GetAllBucketsResponse>): GetAllBucketsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllBucketsResponse): GetAllBucketsResponse;
    internalBinaryWrite(message: GetAllBucketsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetAllBucketsResponse
 */
export declare const GetAllBucketsResponse: GetAllBucketsResponse$Type;
declare class CreateImageRequest$Type extends MessageType<CreateImageRequest> {
    constructor();
    create(value?: PartialMessage<CreateImageRequest>): CreateImageRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateImageRequest): CreateImageRequest;
    internalBinaryWrite(message: CreateImageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.CreateImageRequest
 */
export declare const CreateImageRequest: CreateImageRequest$Type;
declare class CreateImageResponse$Type extends MessageType<CreateImageResponse> {
    constructor();
    create(value?: PartialMessage<CreateImageResponse>): CreateImageResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateImageResponse): CreateImageResponse;
    internalBinaryWrite(message: CreateImageResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.CreateImageResponse
 */
export declare const CreateImageResponse: CreateImageResponse$Type;
declare class GetImageRequest$Type extends MessageType<GetImageRequest> {
    constructor();
    create(value?: PartialMessage<GetImageRequest>): GetImageRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetImageRequest): GetImageRequest;
    internalBinaryWrite(message: GetImageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetImageRequest
 */
export declare const GetImageRequest: GetImageRequest$Type;
declare class GetImageResponse$Type extends MessageType<GetImageResponse> {
    constructor();
    create(value?: PartialMessage<GetImageResponse>): GetImageResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetImageResponse): GetImageResponse;
    internalBinaryWrite(message: GetImageResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetImageResponse
 */
export declare const GetImageResponse: GetImageResponse$Type;
declare class GetImageWithBucketRequest$Type extends MessageType<GetImageWithBucketRequest> {
    constructor();
    create(value?: PartialMessage<GetImageWithBucketRequest>): GetImageWithBucketRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetImageWithBucketRequest): GetImageWithBucketRequest;
    internalBinaryWrite(message: GetImageWithBucketRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetImageWithBucketRequest
 */
export declare const GetImageWithBucketRequest: GetImageWithBucketRequest$Type;
declare class GetImageWithBucketResponse$Type extends MessageType<GetImageWithBucketResponse> {
    constructor();
    create(value?: PartialMessage<GetImageWithBucketResponse>): GetImageWithBucketResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetImageWithBucketResponse): GetImageWithBucketResponse;
    internalBinaryWrite(message: GetImageWithBucketResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetImageWithBucketResponse
 */
export declare const GetImageWithBucketResponse: GetImageWithBucketResponse$Type;
declare class DeleteImageRequest$Type extends MessageType<DeleteImageRequest> {
    constructor();
    create(value?: PartialMessage<DeleteImageRequest>): DeleteImageRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteImageRequest): DeleteImageRequest;
    internalBinaryWrite(message: DeleteImageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.DeleteImageRequest
 */
export declare const DeleteImageRequest: DeleteImageRequest$Type;
declare class GetAllImagesRequest$Type extends MessageType<GetAllImagesRequest> {
    constructor();
    create(value?: PartialMessage<GetAllImagesRequest>): GetAllImagesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllImagesRequest): GetAllImagesRequest;
    internalBinaryWrite(message: GetAllImagesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetAllImagesRequest
 */
export declare const GetAllImagesRequest: GetAllImagesRequest$Type;
declare class GetAllImagesResponse$Type extends MessageType<GetAllImagesResponse> {
    constructor();
    create(value?: PartialMessage<GetAllImagesResponse>): GetAllImagesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllImagesResponse): GetAllImagesResponse;
    internalBinaryWrite(message: GetAllImagesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetAllImagesResponse
 */
export declare const GetAllImagesResponse: GetAllImagesResponse$Type;
declare class GetImagesInBucketRequest$Type extends MessageType<GetImagesInBucketRequest> {
    constructor();
    create(value?: PartialMessage<GetImagesInBucketRequest>): GetImagesInBucketRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetImagesInBucketRequest): GetImagesInBucketRequest;
    internalBinaryWrite(message: GetImagesInBucketRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetImagesInBucketRequest
 */
export declare const GetImagesInBucketRequest: GetImagesInBucketRequest$Type;
declare class GetImagesInBucketResponse$Type extends MessageType<GetImagesInBucketResponse> {
    constructor();
    create(value?: PartialMessage<GetImagesInBucketResponse>): GetImagesInBucketResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetImagesInBucketResponse): GetImagesInBucketResponse;
    internalBinaryWrite(message: GetImagesInBucketResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message s3.GetImagesInBucketResponse
 */
export declare const GetImagesInBucketResponse: GetImagesInBucketResponse$Type;
/**
 * @generated ServiceType for protobuf service s3.Endpoint
 */
export declare const Endpoint: ServiceType;
export {};
