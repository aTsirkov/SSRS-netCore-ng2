import { Injectable } from '@angular/core';

@Injectable()
export class TreeNodes {
    transform(arr, args?: any[]) {
        return this.buildTree(arr)
    }

    buildTree(elements, tree = []) {
        elements.forEach((element) => {
            if (!element.parID) {
                element.children = this.getNestedChildren(elements, element.value)
                tree.push(element)
            }
        })
        return tree;
    }

    getNestedChildren(elements, parent) {
        let out = []
        elements.forEach((element) => {
            if (element.parID == parent) {
                let children = this.getNestedChildren(elements, element.value)
                if (children.length > 0) { element.children = children; }
                out.push(element)
            }
        })
        return out
    }
}