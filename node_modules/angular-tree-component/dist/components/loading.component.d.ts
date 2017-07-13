import { TemplateRef, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
export declare class LoadingComponent {
    private elementRef;
    template: TemplateRef<any>;
    node: TreeNode;
    constructor(elementRef: ElementRef);
}
