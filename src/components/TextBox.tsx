import * as React from "react";
import Timer from "./Timer";

interface Props {
    totalDays: number;
    overedDays: number;
    totalMonths: number;
    overedMonths: number;
}

function TextBox({totalDays, overedDays, totalMonths, overedMonths}: Props) {
    return (
        <div className="textBox">
            <p>
                我共有<span className="emphasis">{totalDays}</span>天
                (~<span className="emphasis">{totalMonths}</span>个月)
            </p>
            <p>
                我已经度过了<span className="emphasis overed">{overedDays}</span>天
                (~<span className="emphasis overed">{overedMonths}</span>个月)
            </p>
            <div>
                <span>我到预设终点还有：</span><br/>
                <span className="emphasis rest">{totalDays - overedDays}</span>天
                (~<span className="emphasis rest">{totalMonths - overedMonths}</span>个月)
                <Timer/>
            </div>
        </div>
    )
}
export default TextBox;