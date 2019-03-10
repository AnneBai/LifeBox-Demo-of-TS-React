# LifeBox-Demo-of-TS-React
A personal Demo of TypeScript + React.


一个通过输入个人生日和期望年龄，展示剩余时间和“人生格子”的小demo. 使用TypeScript和React实现。

```
// 下载依赖
yarn install

// 启动服务
yarn start
```

### 主要内容：
1. 输入部分(生日和期望年龄)；
2. 结果展示部分(总天数，已度过天数和剩余天数)；
3. 倒计时(时:分:秒倒计时)；
4. “表格展示”部分(每个格子代表一个月，已度过的时间做变暗标记)；

界面如下：
![LifeBox](https://annebai.github.io/images/lifebox.png)

### NOTE:
1. 布局采用媒体查询和flex布局，分三种情况，以适应不同屏幕大小的情况下能够展示良好；
2. 对于生日和期望年龄输入，使用原生HTML5的input元素，分别设置`type="date"`和`type="number"`;
3. 总时间和剩余时间计算引用moment.js库；
4. 倒计时组件也是通过moment.js库，展示当前时间到下一日的剩余时间，按秒倒计时, 秒数刷新使用了`requestAnimationFrame`(异步任务需要注意在卸载组件前取消该任务)；
5. 表格展示的背景格子是使用固定间隔的条纹背景(渐变)，每行30个格子(长宽各15px)，总行数根据期望年龄计算；
6. 最后一行多余的格子和已度过的时间，则使用绝对定位的半透明背景div进行覆盖，满一行的用一个大的div，不足一行的用单行小div；