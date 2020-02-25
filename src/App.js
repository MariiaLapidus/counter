import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";


export default class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor');
        this.handleChange = this.handleChange.bind(this);
        //props.funk();
        //console.log(props);
      // this.state = { //первый способ
         //   count :0,
           // data : null
       // }
    }

// второй способ
    state = {
        count :0,
        data : null,
        valueInput: ''
    }

    handler = () => {
        this.setState({// запускает рендер строит новую версию дома
            count: this.state.count + 1
        })
    }

    xxx = () => {
       this.setState ({
           count: this.state.count > 0 ? this.state.count - 1 : 0
       })
    }
    subHundred = () => {
        this.setState({
            count: this.state.count >= 100 ? this.state.count -100 : 0
        })
    }

    hundred = () => {
        this.setState({
            count: this.state.count +100
        })
    }

    handleChange(event) {
         this.setState({
             valueInput: event.target.value
         });
    }

    add = () => {
        this.setState({
            count: +(this.state.count + +this.state.valueInput)
        })
    }

    clear = () => {
        this.setState({
            count: 0
        })
    }

    componentDidMount() {//срабатывает когда компонента включена в дом, идеальное место для запросов Апи, запускается один раз
        console.log('componentDidMount')

    }
  //  componentDidCatch(error, errorInfo) {// на уровне кампеляции
    //}


    componentDidUpdate(prevProps, prevState, snapshot) {// срабатыввает после нажатия на кнопку используется для дебагинга
        console.log('componentDidUpdate');
        console.log('prevProps');
        console.log(prevProps);
        console.log('prevState');
        console.log(prevState);


    }

    componentWillUnmount() {
    }

    render() {// отрисовывает компоненту
       // this.props.funk();
      console.log('render');
      const {count, data, valueInput}=  this.state;


      return(
        <div>
          <Count count={count}/>
          <input type="number" value={valueInput} onChange={this.handleChange} />
          <Button myHandler={this.handler} caption="ADD 1"/>
          <Button myHandler={this.xxx} caption="SUB 1"/>
          <Button myHandler={this.hundred} caption="ADD 100"/>
          <Button myHandler={this.subHundred} caption="SUB 100"/>
          <Button myHandler={this.add} caption="ADD Value"/>
          <Button myHandler={this.clear} caption="Clear"/>

        </div>
    )
  }
}

//export default App;
