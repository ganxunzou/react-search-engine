import React, { Component } from 'react';
import Item from 'antd/lib/list/Item';

const data = [
  {title: ' 对话式AI技能大赛', date: '2018-09-08', user: 'ganxz'},
  {title: ' 对话式AI技能大赛', date: '2018-09-08', user: 'ganxz'},
  {title: ' 对话式AI技能大赛', date: '2018-09-08', user: 'ganxz'},
  {title: ' 对话式AI技能大赛', date: '2018-09-08', user: 'ganxz'},
]

// 对话式AI技能大赛
// 北京·09-08  周六·报名中


class LastLike extends Component {
  render() {
    return (
      <div>
        <div><span>最多点赞</span><span>更多</span></div>
        <ul>
          {data && data.map((item,index)=>{
            return <li>{item.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default LastLike;