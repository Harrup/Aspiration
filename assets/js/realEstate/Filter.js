import React, { Component } from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.city = this.city.bind(this)
    this.homeType = this.homeType.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  city(){
    if(this.props.globalState.formsData.cities != undefined){
      var {cities} = this.props.globalState.formsData
      return cities.map((item) => {
        return <option key={item} value={item}>{item}</option>
      })
    }
  }
  homeType(){
    if(this.props.globalState.formsData.homeTypes != undefined){
      var {homeTypes} = this.props.globalState.formsData
      return homeTypes.map((item) => {
        return <option key={item} value={item}>{item}</option>
      })
    }
  }
  bedrooms(){
    if(this.props.globalState.formsData.bedrooms != undefined){
      var {bedrooms} = this.props.globalState.formsData
      return bedrooms.map((item) => {
        return <option key={item} value={item}>{item} +BR </option>
      })
    }
  }
  render () {
    return (
      <section id="filter">
          <div className="inside">
            <h4>Filter</h4>
            <label htmlFor="city" className="title">City</label>
            <select name="city" className="filters neighbourhood" onChange={this.props.change}>
              <option value='All'>All</option>
              {this.city()}
            </select>
            <label htmlFor="hometype" className="title">Type</label>
            <select name="hometype" className="filters housetype" onChange={this.props.change}>
              <option value="All">All</option>
              {this.homeType()}
            </select>
            <label htmlFor="rooms" className="title">Bedrooms</label>
            <select name="rooms" className="filters bedrooms" onChange={this.props.change}>
              <option value="0">1+ Br</option>
              {this.bedrooms()}
            </select>
            <div className="filters price">
              <span className="title">Price</span>
              <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
              <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
            </div>
            <div className="filters floor-space">
              <span className="title">Floor Space</span>
              <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
              <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
            </div>
            <div className="filters extras">
              <span className="title">Extras</span>
              <label htmlFor="extras">
                <span>Elevator</span>
                <input name="extras" type="checkbox" value="elevator" onChange={this.props.change} />
              </label>
              <label htmlFor="extras">
                <span>Swimming Pool</span>
                <input name="extras" type="checkbox" value="swimming-pool" onChange={this.props.change} />
              </label>
              <label htmlFor="extras">
                <span>Finished Basement</span>
                <input name="extras" type="checkbox" value="finished-basement" onChange={this.props.change} />
              </label>
              <label htmlFor="extras">
                <span>Gym</span>
                <input name="extras" type="checkbox" value="gym" onChange={this.props.change} />
              </label>
            </div>
          </div>
      </section>)
  }
}
