import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()

    this.loopListings = this.loopListings.bind(this)
  }
  loopListings(){
    var {listingsData} = this.props
    if (listingsData.length == 0 || listingsData == undefined ){
      return(<div>No items with the applied filter are currently available</div>)
    }
    return(listingsData.map((listing, index) => {
      if(this.props.globalState.view == "box"){
        var divStyle = {
        background: `url("${listing.image}") no-repeat center center`,
        backgroundSize:'cover',
        width:'100%',
        height:'auto'
      }
        //THIS IS THE BOX VIEW
        return(
          <div className="col-lg-4" key={index}>
            <div className="listing">
              <div className="listing-img" style={divStyle}>
                <span className="adress">{listing.adress}</span>
                <div className="details">
                  <div className="user-img-grp">
                    <div className="user-img"></div>
                  </div>
                  <div className="user-details-grp">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="post-date">05/05/2018</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>{listing.floorspace} ft&sup2;</span></div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.rooms} bedrooms</span>
                      </div>
                    </div>
                  </div>
                  <div className="view-btn">
                    View Listing
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price}</span>
                <span className="location"><i className="fa fa-map-marker"></i>{listing.city},{listing.province}</span>
              </div>
            </div>
          </div>
        )
      }
      //THIS IS THE LIST VIEW
      return(
        <div className="col-md-12 col-lg-6" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`,backgroundSize:'100% 100%'}}>
              <span className="adress">{listing.adress}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"></div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">05/05/2018</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>{listing.floorspace} ft&sup2;</span></div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bedrooms</span>
                    </div>
                  </div>
                </div>
                <div className="view-btn">
                  View Listing
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i className="fa fa-map-marker"></i>{listing.city},{listing.province}</span>
            </div>
          </div>
        </div>
      )
    }))
  }

  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change} />
        </section>

        <section className="sortby-area">
          <div className="results">{this.props.globalState.filteredData.length} results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-asc">Lowest Price</option>
              <option value="price-dsc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeViews.bind(null, "list")}></i>
              <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeViews.bind(null,"box")} ></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
          <div className="row">
            {this.loopListings()}
          </div>
        </section>

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}
