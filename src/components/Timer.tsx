import * as React from "react";
import * as moment from "moment";

interface State {
    second: string;
}

interface StaticState {
    task: number;
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

export default class Timer extends React.Component<object, State, StaticState> {

    taskId: NodeJS.Timeout;

    constructor(props: object) {
        super(props);
        this.state = {
            second: getSecond(),
        }
    }
    
    componentDidMount() {
        this.taskId = setTimeout(this.updateSecond, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.taskId);
    }

    updateSecond = () => {
        this.setState({
            second: getSecond(),
        });
        this.taskId = setTimeout(this.updateSecond, 1000);
    }

    render() {
        return (
            <span className="timer">
                <span>{getHour()}:{getMinute()}:{this.state.second}</span>
            </span>
        );
    }
};
