export interface UploadMetadata {
    fileReference: string;
    fileName: string;
    fileType: string;
    fileSize?: number;
    url: string;
    uploadedAt: string;
    provider: string;
}

export interface SignedUploadUrlResult {
    uploadUrl: string;
    fileKey: string;
    publicUrl: string;
    expiresAt: string;
    headers?: Record<string, string>;
}

export interface IStorageProvider {
    readonly name: string;
    generateSignedUploadUrl(fileName: string, mimeType: string, folder?: string): Promise<SignedUploadUrlResult>;
    verifyAndStoreReference(fileKeyOrUrl: string, metadata?: Record<string, any>): Promise<UploadMetadata>;
}
