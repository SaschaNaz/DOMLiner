interface DOMDecorations<T extends Element> {
    this: (element: T) => any;
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, textContent?: string): T;
    private _propertyAssign(element, propertyAnnotation, propertyValue);
    private static _globalLiner;
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, textContent?: string): T;
}