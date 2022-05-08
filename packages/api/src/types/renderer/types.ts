import type { Language } from '@share/i18n';
import type Token from 'markdown-it/lib/token';
import type * as Monaco from 'monaco-editor';
export interface PathItem {
    repo: string;
    path: string;
}
export interface FileItem extends PathItem {
    name: string;
}
export interface Doc extends PathItem {
    type: 'file' | 'dir';
    name: string;
    content?: string;
    title?: string;
    passwordHash?: string;
    contentHash?: string;
    status?: 'loaded' | 'save-failed' | 'saved';
    absolutePath?: string;
}
export interface Repo {
    name: string;
    path: string;
}
export declare namespace Components {
    namespace Modal {
        type ConfirmModalParams = {
            title?: string;
            content?: string;
            component?: any;
            action?: any;
        };
        type AlertModalParams = {
            title?: string;
            content?: string;
            component?: any;
            action?: any;
        };
        type InputModalParams = {
            type?: string;
            title?: string;
            content?: string;
            value?: string;
            hint?: string;
            modalWidth?: string;
            readonly?: boolean;
            select?: boolean | [number, number, 'forward' | 'backward' | 'none'];
        };
    }
    namespace Toast {
        type ToastType = 'warning' | 'info';
    }
    namespace ContextMenu {
        type SeparatorItem = {
            type: 'separator';
            hidden?: boolean;
        };
        type NormalItem = {
            type?: 'normal';
            id: string;
            label: string;
            hidden?: boolean;
            onClick: (item?: NormalItem) => void;
        };
        type Item = SeparatorItem | NormalItem;
    }
    namespace Tabs {
        interface Item {
            key: string;
            label: string;
            description?: string;
            payload: any;
            fixed?: boolean;
        }
    }
    namespace FileTabs {
        interface Item extends Tabs.Item {
            payload: {
                file: Doc | null;
            };
        }
    }
    namespace Tree {
        interface Node extends Pick<Doc, 'type' | 'name' | 'path' | 'repo'> {
            mtime?: number;
            birthtime?: number;
            marked?: boolean;
            children?: Node[];
            level: number;
        }
    }
}
export declare type ThemeName = 'system' | 'dark' | 'light';
export declare type LanguageName = 'system' | Language;
export declare type ExportType = 'pdf' | 'docx' | 'html' | 'rst' | 'adoc';
export declare type SettingGroup = 'repos' | 'appearance' | 'editor' | 'image' | 'proxy' | 'other' | 'openai';
export declare type RegistryHostname = 'registry.npmjs.org' | 'registry.npmmirror.com';
export declare type RenderEnv = {
    source: string;
    file: Doc | null;
    renderCount: number;
    attributes?: Record<string, any>;
    tokens: Token[];
};
export declare type ExtensionCompatible = {
    value: boolean;
    reason: string;
};
export declare type ExtensionLoadStatus = {
    version?: string;
    themes: boolean;
    plugin: boolean;
    style: boolean;
    activationTime: number;
};
export interface Extension {
    id: string;
    displayName: string;
    description: string;
    icon: string;
    readmeUrl: string;
    changelogUrl: string;
    homepage: string;
    license: string;
    author: {
        name: string;
        email?: string;
        url?: string;
    };
    version: string;
    themes: {
        name: string;
        css: string;
    }[];
    compatible: ExtensionCompatible;
    main: string;
    style: string;
    enabled?: boolean;
    installed: boolean;
    origin: 'official' | 'registry' | 'unknown';
    dist: {
        tarball: string;
        unpackedSize: number;
    };
    isDev?: boolean;
}
export declare type BuildInSettings = {
    'repos': Repo[];
    'theme': ThemeName;
    'language': LanguageName;
    'auto-save': number;
    'custom-css': string;
    'assets-dir': string;
    'shell': string;
    'editor.mouse-wheel-zoom': boolean;
    'editor.font-size': number;
    'editor.tab-size': 2 | 4;
    'editor.ordered-list-completion': 'auto' | 'increase' | 'one';
    'editor.minimap': boolean;
    'editor.line-numbers': 'on' | 'off' | 'relative' | 'interval';
    'plugin.image-hosting-picgo.server-url': string;
    'plugin.image-hosting-picgo.enable-paste-image': boolean;
    'plugin.editor-openai.api-token': string;
    'plugin.editor-openai.engine-id': string;
    'plugin.editor-openai.mode': 'insert' | 'completion';
    'plugin.editor-openai.max-tokens': number;
    'plugin.editor-openai.range': number;
    'plugin.editor-openai.args-json': string;
    'license': string;
    'mark': FileItem[];
    'updater.source': 'github.com' | 'ghproxy.com' | 'mirror.ghproxy.com';
    'doc-history.number-limit': number;
    'server.host': string;
    'server.port': number;
    'proxy.enabled': boolean;
    'proxy.server': string;
    'proxy.pac-url': string;
    'proxy.bypass-list': string;
    'extension.registry': RegistryHostname;
    'keep-running-after-closing-window': boolean;
    'plantuml-api': string;
};
export declare type BuildInActions = {
    'view.render-immediately': () => void;
    'view.render': () => void;
    'view.refresh': () => void;
    'view.reveal-line': (startLine: number) => void;
    'view.scroll-top-to': (top: number) => void;
    'view.get-content-html': () => string;
    'view.get-view-dom': () => HTMLElement | null;
    'view.get-render-env': () => RenderEnv | null;
    'view.enter-presentation': () => void;
    'view.exit-presentation': () => void;
    'doc.show-history': (doc?: Doc) => void;
    'doc.hide-history': () => void;
    'extension.show-manager': (id?: string) => void;
    'layout.toggle-view': (visible?: boolean) => void;
    'layout.toggle-side': (visible?: boolean) => void;
    'layout.toggle-xterm': (visible?: boolean) => void;
    'layout.toggle-editor': (visible?: boolean) => void;
    'control-center.toggle': (visible?: boolean) => void;
    'status-bar.refresh-menu': () => void;
    'control-center.refresh': () => void;
    'tree.refresh': () => void;
    'editor.toggle-wrap': () => void;
    'filter.show-quick-open': () => void;
    'filter.choose-document': () => Promise<Doc>;
    'file-tabs.switch-left': () => void;
    'file-tabs.switch-right': () => void;
    'file-tabs.close-current': () => void;
    'xterm.run-code': (language: string, code: string, exit: boolean) => void;
    'xterm.run': (code: string) => void;
    'xterm.init': () => void;
    'plugin.document-history-stack.back': () => void;
    'plugin.document-history-stack.forward': () => void;
    'plugin.image-hosting-picgo.upload': (file: File) => Promise<string | undefined>;
    'plugin.status-bar-help.show-readme': () => void;
    'plugin.status-bar-help.show-features': () => void;
    'plugin.status-bar-help.show-shortcuts': () => void;
    'plugin.status-bar-help.show-plugin': () => void;
    'plugin.image-localization.all': () => void;
    'plugin.switch-todo.switch': (line?: number, checked?: boolean) => void;
    'plugin.electron-zoom.zoom-in': () => void;
    'plugin.electron-zoom.zoom-out': () => void;
    'plugin.electron-zoom.zoom-reset': () => void;
    'premium.show': () => void;
};
export declare type BuildInActionName = keyof BuildInActions;
export declare type BuildInHookTypes = {
    STARTUP: never;
    GLOBAL_RESIZE: never;
    ACTION_BEFORE_RUN: {
        name: string;
    };
    ACTION_AFTER_RUN: {
        name: string;
    };
    THEME_CHANGE: {
        name: ThemeName;
    };
    EDITOR_PASTE_IMAGE: {
        file: File;
    };
    MARKDOWN_BEFORE_RENDER: {
        src: string;
        env: RenderEnv;
    };
    VIEW_ELEMENT_CLICK: {
        e: MouseEvent;
        view: HTMLElement;
    };
    VIEW_ELEMENT_DBCLICK: {
        e: MouseEvent;
        view: HTMLElement;
    };
    VIEW_KEY_DOWN: {
        e: KeyboardEvent;
        view: HTMLElement;
    };
    VIEW_SCROLL: {
        e: WheelEvent;
    };
    VIEW_RENDER: never;
    VIEW_RENDERED: never;
    VIEW_MOUNTED: never;
    VIEW_FILE_CHANGE: never;
    VIEW_BEFORE_REFRESH: never;
    VIEW_AFTER_REFRESH: never;
    VIEW_ON_GET_HTML_FILTER_NODE: {
        node: HTMLElement;
        options: {
            inlineStyle?: boolean;
            includeStyle?: boolean;
            inlineLocalImage?: boolean;
            uploadLocalImage?: boolean;
            highlightCode?: boolean;
            preferPng?: boolean;
            nodeProcessor?: (node: HTMLElement) => void;
        };
    };
    TREE_NODE_SELECT: {
        node: Components.Tree.Node;
    };
    MONACO_CHANGE_VALUE: {
        uri: string;
        value: string;
    };
    MONACO_BEFORE_INIT: {
        monaco: typeof Monaco;
    };
    MONACO_READY: {
        editor: Monaco.editor.IStandaloneCodeEditor;
        monaco: typeof Monaco;
    };
    EDITOR_READY: {
        editor: Monaco.editor.IStandaloneCodeEditor;
        monaco: typeof Monaco;
    };
    EDITOR_CHANGE: {
        uri: string;
        value: string;
    };
    DOC_CREATED: {
        doc: Doc;
    };
    DOC_DELETED: {
        doc: Doc;
    };
    DOC_MOVED: {
        oldDoc: Doc;
        newDoc: Doc;
    };
    DOC_SAVED: {
        doc: Doc;
    };
    DOC_SWITCHED: {
        doc: Doc | null;
    };
    DOC_SWITCH_FAILED: {
        doc?: Doc | null;
        message: string;
    };
    DOC_CHANGED: {
        doc: Doc;
    };
    DOC_BEFORE_EXPORT: {
        type: ExportType;
    };
    I18N_CHANGE_LANGUAGE: {
        lang: LanguageName;
        currentLang: Language;
    };
    SETTING_PANEL_BEFORE_SHOW: {};
    SETTING_CHANGED: {
        changedKeys: (keyof BuildInSettings)[];
        oldSettings: BuildInSettings;
        settings: BuildInSettings;
    };
    SETTING_FETCHED: {
        settings: BuildInSettings;
        oldSettings: BuildInSettings;
    };
    SETTING_BEFORE_WRITE: {
        settings: BuildInSettings;
    };
    EXTENSION_READY: {
        extensions: Extension[];
    };
};
export declare type BuildInIOCTypes = {
    [key in keyof BuildInHookTypes]: any;
} & {
    STATUS_BAR_MENU_TAPPERS: any;
    CONTROL_CENTER_SCHEMA_TAPPERS: any;
    THEME_STYLES: any;
};
export declare type FrontMatterAttrs = {
    headingNumber?: boolean;
    wrapCode?: boolean;
    enableMacro?: boolean;
    define?: Record<string, boolean>;
    mdOptions?: Record<string, boolean>;
};
