import { TemplateRef, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
export declare class TreeNodeContent {
    private elementRef;
    node: TreeNode;
    index: number;
    template: TemplateRef<any>;
    constructor(elementRef: ElementRef);
}
