import React from 'react'
import css from '../index.module.scss'
// import Axios from 'axios';
import Drawer from './drawer'
import { withRouter } from 'react-router'
import Drawerrecommone from './drawerRecommond'

class Contant extends React.Component {
    state = {
        total: null,
        arr: [],
        apha: true,
        open: false,
        openRe: false
    }

    mation = {
        date: this.props.id
    }

    onOpenChange() {
        this.setState({ open: !this.state.open });
    }
    toChange() {
        this.setState({
            open: false,
            openRe: false
        })
    }
    toChangeRe() {
        this.setState({
            openRe: !this.state.openRe
        })
    }
    toOpen() {
        this.setState({
            apha: false
        })
    }
    jump(id) {
        console.log(id)
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        // console.log(this.props)
        return <div>
            {
                this.state.open || this.state.openRe ?
                    <div className={css.cavan} onClick={this.toChange.bind(this)}></div>
                    : null
            }

            <div className={css.info}>
                <div>
                    <span onClick={this.onOpenChange.bind(this)}>{this.props.need.data.list[0].show_time_top}</span>
                    <span onClick={this.onOpenChange.bind(this)}>{this.props.need.data.list[0].show_time_bottom}</span>
                    <span className="iconfont icon-xiangyou"></span>
                </div>
                <div>
                    <span>{this.props.need.data.list[0].city_name + "  |  " + this.props.need.data.list[0].venue_name}</span>
                </div>
                <div><a href={this.props.id.url_data.venue_url}><span className="iconfont icon-dingweiweizhi"></span></a></div>
            </div>
            <div className={css.vip}><a href={this.props.id.url_data.vip_url}>
                <div>
                    <span>橙PLUS卡</span>开通送￥100 最高省118元
                    <span>立即开卡</span>
                </div>
            </a>
            </div>
            <div className={css.tab}><a href={this.props.id.url_data.certification_url}>
                {
                    this.props.id.static_data.real_name.is_real_name_certification ?
                        <div><span style={{ background: '#f90' }} className={css.te}>实名认证</span>{this.props.id.static_data.real_name.desc}</div>
                        : null
                }
            </a>
                <div>VIP+ : V+会员享<span>国内免邮 + 双倍积分</span></div>
                <div>入场 : {this.props.id.static_data.tips.desc}</div>
                <div>支持 : <ul>{this.props.id.static_data.support.list.map((res) =>
                    <li key={res}>{res + '   '}</li>
                )}</ul></div>

            </div>

            <div className={css.address}>
                <h2>巡演城市<span>{this.props.total}场</span></h2>
                <ul>
                    <li>深圳<p>07/21</p></li>
                    <li>广州<p>07/23</p></li>
                    <li>四川<p>07/28</p></li>
                    <li>武汉<p>08/08</p></li>
                    <li>厦门<p>08/10</p></li>
                </ul>
            </div>

            <div className={css.hide}>
                {
                    this.state.apha ?
                        <div>
                            <h2>演出介绍</h2>
                            <div dangerouslySetInnerHTML={{ __html: this.props.id.static_data.show_desc.desc }} className={css.top + " " + css.add}>
                            </div>
                            <div className={css.gs} onClick={this.toOpen.bind(this)}>显示全部</div>
                        </div>
                        : <div dangerouslySetInnerHTML={{ __html: this.props.id.static_data.show_desc.desc }} className={css.top}>
                        </div>
                }
            </div>

            <div className={css.remark}>
                <h2>温馨提示<span className="iconfont icon-xiangyou"></span></h2>
                <ul>
                    {this.props.id.static_data.show_notice.list.map(item =>
                        <li key={item.title} onClick={this.toChangeRe.bind(this)}>{item.title}</li>
                    )}
                </ul>
            </div>

            <div className={css.recommend}>
                <h2>相关推荐</h2>
                <ul>
                    {
                        this.props.need.data.list.map(item =>
                            <li key={item.name} onClick={() => this.jump(item.schedular_id)}>
                                <img src={item.pic} />
                                <span>{item.show_time_top}</span>
                                <span>{item.show_time_bottom}</span>
                                <p>{item.name}</p>
                                <p>{item.city_name + " | " + item.venue_name}</p>
                                <p>{"￥" + item.min_price}<span>起</span></p>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className={css.Tabbar}>
                <span className="iconfont icon-kefu"></span>
                <button onClick={this.onOpenChange.bind(this)}>立即购买</button>
            </div>
            <Drawer myopen={this.state.open} myid={this.props.id}></Drawer>
            <Drawerrecommone myopenRe={this.state.openRe} myid={this.props.id}></Drawerrecommone>

        </div>
    }
}
export default withRouter(Contant)