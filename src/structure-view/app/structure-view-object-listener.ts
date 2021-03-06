import {StructureViewObject} from "./structure-view-object";

export interface StructureViewObjectListener {
    onCollapsed(target: StructureViewObject): void;
    onExpanded(target: StructureViewObject): void;
    onSizeChanged(target: StructureViewObject): void;
    onClicked(target: StructureViewObject, event: JQueryEventObject): void;
    onDoubleClicked(target: StructureViewObject, event: JQueryEventObject): void;
}
