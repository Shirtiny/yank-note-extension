export declare const MARKDOWN_FILE_EXT = ".md";
export declare const ENCRYPTED_MARKDOWN_FILE_EXT = ".c.md";
export declare const DOC_HISTORY_MAX_CONTENT_LENGTH = 102400;
export declare const DEFAULT_EXCLUDE_REGEX = "^node_modules/$|^.git/$|^\\.";
export declare function isMarkdownFile(path: string): boolean;
export declare function isEncryptedMarkdownFile(path: string): boolean;
