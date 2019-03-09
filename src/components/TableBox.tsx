import * as React from "react";
import "./TableBox.css";

interface Props {
    total: number;
    overed: number;
}
/**
 * 每行30格， 每格15px
 */

export default function TableBox({total, overed}: Props) {
    const totalHeight = Math.ceil(total / 30) * 15;
    const bottomOffset = totalHeight - Math.floor(overed / 30) * 15; // 整行格子
    const rightOffset = (30 - (overed % 30)) * 15; // 不足一行的格子
    const leftOffset = (total % 30) * 15; // 右下角多余格子
    return (
        <div
            className="tableBox"
            style={{
                height: totalHeight,
            }}
        >
            <div
                className="overedTable"
                style={{
                    bottom: bottomOffset,
                }}
            >
            </div>
            <div
                className="overedTable"
                style={{
                    top: totalHeight - bottomOffset,
                    bottom: bottomOffset - 15,
                    right: rightOffset,
                }}
            >
            </div>
            <div
                className="overedTable"
                style={{
                    top: totalHeight - 15,
                    left: leftOffset === 0 ? "100%" : leftOffset,
                }}
            >
            </div>
        </div>
    );
}