﻿interface DOMDecorations {
    [key: string]: any;
}
declare class DOMLiner {
    public document: Document;
    constructor(document: Document);
    public element(tagName: string, decorations?: DOMDecorations, children?: Node[]): Element;
    public element(tagName: string, decorations?: DOMDecorations, textContent?: string): Element;
}