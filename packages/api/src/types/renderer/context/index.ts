import * as storage from '@fe/utils/storage';
import * as utils from '@fe/utils/index';
import { showPremium } from '@fe/others/premium';
import * as extension from '@fe/others/extension';
import * as ioc from '@fe/core/ioc';
import * as plugin from '@fe/core/plugin';
import * as hook from '@fe/core/hook';
import * as action from '@fe/core/action';
import * as command from '@fe/core/command';
import { useToast } from '@fe/support/ui/toast';
import { useModal } from '@fe/support/ui/modal';
import * as env from '@fe/support/env';
import * as base from '@fe/services/base';
import * as api from '@fe/support/api';
import * as embed from '@fe/support/embed';
import * as args from '@fe/support/args';
import * as doc from '@fe/services/document';
import * as view from '@fe/services/view';
import * as tree from '@fe/services/tree';
import * as markdown from '@fe/services/markdown';
import * as statusBar from '@fe/services/status-bar';
import * as layout from '@fe/services/layout';
import * as editor from '@fe/services/editor';
import * as theme from '@fe/services/theme';
import * as setting from '@fe/services/setting';
import * as i18n from '@fe/services/i18n';
import * as controlCenter from '@fe/services/control-center';
import * as lib from './lib';
import * as components from './components';
declare const ctx: {
    lib: typeof lib;
    components: typeof components;
    ioc: typeof ioc;
    base: typeof base;
    api: typeof api;
    args: typeof args;
    store: import("vuex").Store<{
        tree: import("../types").Components.Tree.Node[] | null;
        wordWrap: "on" | "off";
        typewriterMode: boolean;
        showSide: boolean;
        showView: boolean;
        showEditor: boolean;
        showXterm: boolean;
        showOutline: boolean;
        autoPreview: boolean;
        syncScroll: boolean;
        showSetting: boolean;
        showExport: boolean;
        showControlCenter: boolean;
        presentation: boolean;
        isFullscreen: boolean;
        currentContent: string;
        inComposition: boolean;
        currentRepo: import("../types").Repo | undefined;
        currentFile: import("../types").Doc | null;
        recentOpenTime: Record<string, number>;
        tabs: import("../types").Components.FileTabs.Item[];
        selectionInfo: {
            textLength: number;
            selectedLength: number;
            lineCount: number;
            line: number;
            column: number;
        };
    }>;
    action: typeof action;
    doc: typeof doc;
    command: typeof command;
    tree: typeof tree;
    markdown: typeof markdown;
    statusBar: typeof statusBar;
    controlCenter: typeof controlCenter;
    layout: typeof layout;
    editor: typeof editor;
    view: typeof view;
    theme: typeof theme;
    storage: typeof storage;
    embed: typeof embed;
    setting: typeof setting;
    i18n: typeof i18n;
    env: typeof env;
    utils: typeof utils;
    ui: {
        useToast: typeof useToast;
        useModal: typeof useModal;
    };
    registerHook: typeof hook.registerHook;
    removeHook: typeof hook.removeHook;
    triggerHook: typeof hook.triggerHook;
    showPremium: typeof showPremium;
    showExtensionManager: typeof extension.showManager;
    getExtensionLoadStatus: typeof extension.getLoadStatus;
    version: string;
};
export declare type Ctx = typeof ctx;
export declare type Plugin = plugin.Plugin<Ctx>;
export default ctx;
