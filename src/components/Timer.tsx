import * as React from "react";
import * as moment from "moment";

interface State {
    second: string;
}

function getHour(): string {
    return padStr(23 - moment().hours());
}

function getMinute(): string {
    return padStr(59 - moment().minutes());
}

function getSecond(): string {
    return padStr(60 - moment().seconds());
}

function padStr(num: number): string {
    return String(num).padStart(2, "0");
}

export default class Timer extends React.Component<object, State> {

    constructor(props: object) {
        super(props);
        this.state = {
            second: getSecond(),
        }
    }
    
    componentDidMount() {
        requestAnimationFrame(this.updateSecond);
    }

    updateSecond = () => {
        this.setState({
            second: getSecond(),
        });
        requestAnimationFrame(this.updateSecond);
    }

    render() {
        return (
            <span className="timer">
                <span>{getHour()}:{getMinute()}:{this.state.second}</span>
            </span>
        );
    }
};
