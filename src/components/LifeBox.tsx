import * as React from "react";
import * as moment from "moment";
import TextBox from "./TextBox";
import TableBox from "./TableBox";
import "./LifeBox.css";

interface State {
    birthday: string; // 生日
    lifeYear: number; // 活到多少岁
}

function getTotal(birthday: string, lifeYear: number): number[] {
    return [
        moment(birthday).add(lifeYear, "years").diff(birthday, "days"),
        moment(birthday).add(lifeYear, "years").diff(birthday, "months"),
    ];
}
function getOvered(birthday: string): number[] {
    return [
        moment().diff(birthday, "days"),
        moment().diff(birthday, "months"),
    ];
}
class LifeBox extends React.Component<object, State> {

    constructor(props: object) {
        super(props);
        this.state = {
            birthday: "1990-01-01",
            lifeYear: 80,
        };
    }

    getMinLifeYear = () => {
        const birthday = moment(this.state.birthday);
        if (!birthday.isValid() || birthday.isAfter(moment())) {
            return 0;
        }
        return moment().diff(birthday, "years") + 1;
    }

    updateBirthday = (value: string) => {
        this.setState({
            birthday: value,
        });
    };

    updateLifeYear = (value: number) => {
        this.setState({
            lifeYear: value,
        })
    }

    render() {
        const { birthday, lifeYear } = this.state;
        const [totalDays, totalMonths] = getTotal(birthday, lifeYear);
        const [overedDays, overedMonths] = getOvered(birthday);
        const minLifeYear = this.getMinLifeYear();
        return (
            <div className="content">
                <div className="leftCont">
                    <div className="lifeBox">
                        <h1 className="lifeBoxTitle">Get my life box</h1>
                        <div>
                            <label htmlFor="birthday">我的生日是
                                <input
                                    className={moment(birthday).isAfter(moment()) ? "warning" : ""}
                                    name="birthday"
                                    type="date"
                                    value={birthday}
                                    onChange={(e) => {
                                        this.updateBirthday(e.target.value);
                                    }}
                                />
                            </label>
                        </div>
                        <div>
                            <h2>假设</h2>
                            <span className="emphasis">假设</span>
                            <label htmlFor="lifeYear">
                                我会活到
                                <input
                                    className={minLifeYear > lifeYear ? "warning" : ""}
                                    name="lifeYear"
                                    type="number"
                                    min={minLifeYear}
                                    value={lifeYear}
                                    onChange={(e) => {
                                        this.updateLifeYear(+(e.target.value));
                                    }}
                                />
                                岁.
                            </label>
                        </div>
                        </div>
                    <div className="lifeBox">
                    {
                        moment(birthday).isValid() && (
                            <TextBox
                                totalDays={totalDays}
                                overedDays={overedDays}
                                totalMonths={totalMonths}
                                overedMonths={overedMonths}
                            />
                        )
                    }
                </div>
                </div>
                <div className="rightCont">
                    <div className="lifeBox">
                        {
                            moment(birthday).isValid() && (
                                <TableBox total={totalMonths} overed={overedMonths} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LifeBox;