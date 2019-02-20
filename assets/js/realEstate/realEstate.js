import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      city: 'All',
      hometype:'All',
      rooms: 0,
      min_price:0,
      max_price:10000000,
      min_floor_space:0,
      max_floor_space:5000,
      filteredData: listingsData,
      formsData: '',
      sortby: 'price-asc',
      view: "box",
      search:"",
      elevator:false,
      pool:false,
      basement:false,
      gym:false
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForm = this.populateForm.bind(this)
    this.changeViews = this.changeViews.bind(this)
  }
  componentWillMount(){
    var listingsData = this.state.listingsData.sort((a, b)=>{
      return a.price - b.price
    })
      this.setState({
        listingsData
      })
  }
  changeViews(viewType){
    this.setState({
      view: viewType
    })
  }
  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]:value
    }, () => {
       console.log(this.state)
      this.filteredData()
      //this.changeViews()
    })
  }
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorspace >= this.state.min_floor_space
      && item.floorspace <= this.state.max_floor_space && item.rooms >= this.state.rooms
    })
    if(this.state.city != 'All'){
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }
      if(this.state.hometype != 'All'){
        newData = newData.filter((item) => {
          return item.hometype == this.state.hometype
        })
      }
      if(this.state.sortby == "price-asc"){
        newData.sort((a,b) =>{
            return a.price - b.price
        })
      }
      if(this.state.sortby == "price-dsc"){
        newData.sort((a,b) =>{
            return b.price - a.price
        })
      }
      if(this.state.search != ""){
        newData = newData.filter((item) => {
          var city = item.city.toLowerCase()
          var searchText = this.state.search.toLowerCase()
          var n = city.match(searchText)
          if(n != null){
            return true
          }
        })
      }
      if(this.state.gym == true){
        newData = newData.filter((item) =>{
          return item.gym == this.state.gym
        })
      }
      if(this.state.elevator == true){
        newData = newData.filter((item) =>{
          return item.elevator == this.state.elevator
        })
      }
      if(this.state.pool == true){
        newData = newData.filter((item) =>{
          return item.pool == this.state.pool
        })
      }
      if(this.state.basement == true){
        newData = newData.filter((item) =>{
          return item.basement == this.state.basement
        })
      }
    this.setState({
      filteredData: newData
    })
  }
  populateForm(){
    //cities
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
      //prevent repetition of cities
    cities = new Set(cities)
      //make cities an array
    cities = [...cities]
    cities = cities.sort()

    //hometypes
    var homeTypes = this.state.listingsData.map((item) => {
      return item.hometype
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()
    //rooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      formsData:{
        cities,
        homeTypes,
        bedrooms
      }
    })
  }
  render () {
    return (
      <div className="container">
        <Header />
        <section id="content">
            <Filter globalState={this.state} change={this.change} populateAction={this.populateForm} />
            <Listings globalState={this.state} listingsData={this.state.filteredData} change={this.change} changeViews={this.changeViews} />
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
