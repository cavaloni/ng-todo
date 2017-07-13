import { ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
export declare class TreeNodeDropSlot {
    private elementRef;
    node: TreeNode;
    dropIndex: number;
    constructor(elementRef: ElementRef);
    onDrop($event: any): void;
    allowDrop(element: any): boolean;
}
