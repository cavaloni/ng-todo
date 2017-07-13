import { ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
export declare class TreeNodeComponent {
    private elementRef;
    node: TreeNode;
    index: number;
    templates: any;
    constructor(elementRef: ElementRef);
}
