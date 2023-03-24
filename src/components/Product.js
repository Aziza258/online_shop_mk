import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";
import ShowFullItem from "./ShowFullItem";
import Categories from "./Categories";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";

export class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Часы МК",
          img: "22150.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 2,
          title: "Часы МК",
          img: "22477.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 3,
          title: "Часы МК",
          img: "22629.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 4,
          title: "Часы МК",
          img: "22658.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 5,
          title: "Часы МК",
          img: "32707.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 6,
          title: "Часы МК",
          img: "24818.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 7,
          title: "Часы МК",
          img: "24838.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 8,
          title: "Часы МК",
          img: "24861.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 9,
          title: "Часы МК",
          img: "24795.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 10,
          title: "Часы МК",
          img: "32698.0x500.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 11,
          title: "Часы МК",
          img: "MK2747.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 12,
          title: "Часы МК",
          img: "MK3221.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 13,
          title: "Часы МК",
          img: "MK4556.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 14,
          title: "Часы МК",
          img: "MK6986.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 15,
          title: "Часы МК",
          img: "MK7234.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "watch",
          price: "70000 тенге"
        },
        {
          id: 16,
          title: "Блуза",
          img: "rub1.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 17,
          title: "Блуза",
          img: "rub2.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 18,
          title: "Блуза",
          img: "rub3.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 19,
          title: "Блуза",
          img: "rub4.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 20,
          title: "Блуза",
          img: "rub5.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 21,
          title: "Блуза",
          img: "rub6.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 22,
          title: "Блуза",
          img: "rub7.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 23,
          title: "Блуза",
          img: "rub8.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 24,
          title: "Блуза",
          img: "rub9.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 25,
          title: "Блуза",
          img: "rub10.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 26,
          title: "Блуза",
          img: "rub11.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 27,
          title: "Блуза",
          img: "rub12.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 28,
          title: "Блуза",
          img: "rub13.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 29,
          title: "Блуза",
          img: "rub14.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 30,
          title: "Блуза",
          img: "rub15.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "blouse",
          price: "30000 тенге"
        },
        {
          id: 31,
          title: "Сумка",
          img: "sum1.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 32,
          title: "Сумка",
          img: "sum2.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 33,
          title: "Сумка",
          img: "sum3.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 34,
          title: "Сумка",
          img: "sum4.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 35,
          title: "Сумка",
          img: "sum5.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 36,
          title: "Сумка",
          img: "sum6.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 37,
          title: "Сумка",
          img: "sum7.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 38,
          title: "Сумка",
          img: "sum8.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 39,
          title: "Сумка",
          img: "sum9.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 40,
          title: "Сумка",
          img: "sum10.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 41,
          title: "Сумка",
          img: "sum11.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 42,
          title: "Сумка",
          img: "sum12.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 43,
          title: "Сумка",
          img: "sum13.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 44,
          title: "Сумка",
          img: "sum14.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 45,
          title: "Сумка",
          img: "sum15.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "bag",
          price: "40000 тенге"
        },
        {
          id: 46,
          title: "Шарф",
          img: "sca1.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 47,
          title: "Шарф",
          img: "sca2.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 48,
          title: "Шарф",
          img: "sca3.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 49,
          title: "Шарф",
          img: "sca4.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 50,
          title: "Шарф",
          img: "sca5.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 51,
          title: "Шарф",
          img: "sca6.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 52,
          title: "Шарф",
          img: "sca7.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 53,
          title: "Шарф",
          img: "sca8.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 54,
          title: "Шарф",
          img: "sca9.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 55,
          title: "Шарф",
          img: "sca10.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 56,
          title: "Шарф",
          img: "sca11.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 57,
          title: "Шарф",
          img: "sca12.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 58,
          title: "Шарф",
          img: "sca13.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 59,
          title: "Шарф",
          img: "sca14.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
        {
          id: 60,
          title: "Шарф",
          img: "sca15.webp",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, accusantium?",
          category: "scarf",
          price: "10000 тенге"
        },
      ],
      showFullItem: false,
      fullIten: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        {/* <Header orders={this.state.orders} onDelete={this.deleteOrder} /> */}
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullIten} />}
        <Footer />
      </div>
    )
  }


  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  onShowItem(item) {
    this.setState({ fullIten: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })

  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}


export default Product