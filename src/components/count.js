// import { Component } from "react";

// export class Count extends Component {
//   state = {
//     count: 0,
//   };

//   componentDidMounth() {
//     console.log("компонент додали до DOM");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log("змінився count");
//     }
//     console.log("компонент оновився");
//     console.log("було", prevState);
//     console.log("стало", this.state);
//   }

//   componentWillUnmount() {
//     console.log("компонент видалиться");
//   }

//   incrementCopunter = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>лічильник</h1>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCopunter}>+</button>
//       </div>
//     );
//   }
// }
