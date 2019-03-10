import * as React from "react";
import "./TableBox.css";

interface Props {
    total: number;
    overed: number;
}
/**
 * 每行30格， 每格15px
 */

const unit = 15;
const rowUnits = 30;

export default function TableBox({total, overed}: Props) {
    const totalRows = Math.ceil(total / rowUnits);
    const overedRows = Math.floor(overed / rowUnits);
    const overedSingleRowUnits = overed % rowUnits;
    const lastSingleRowUnits = total % rowUnits;
    const bottomOffset = totalRows > overedRows ? (totalRows - overedRows) * unit : 0;  // 整行格子
    return (
        <div
            className="tableBox"
            style={{
                height: totalRows * unit,
            }}
        >
            <div
                className="overedTable"
                style={{
                    bottom: bottomOffset,
                }}
            >
            </div>
            {
                 totalRows > overedRows && overedSingleRowUnits > 0
                    ? (
                        <div
                            className="overedTable"
                            style={{
                                top: totalRows > overedRows ? overedRows * unit : 0,
                                bottom: bottomOffset - unit,
                                right: (rowUnits - overedSingleRowUnits) * unit,
                            }}
                        >
                        </div>
                    ) : null
            }
            {
                lastSingleRowUnits > 0 && totalRows > 1
                    ? (
                        <div
                            className="overedTable toRemove"
                            style={{
                                top: (totalRows - 1) * unit,
                                left: lastSingleRowUnits * unit,
                            }}
                        >
                        </div>
                    ) : null
            }
        </div>
    );
}