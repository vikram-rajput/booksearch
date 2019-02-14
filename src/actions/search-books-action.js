// if(action.q.trim()){

//         } else {
//             alert('Please Enter Book title to search');
//         }

// import axios from "axios";
// const url =`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/series/40321-drina?format=xml&key=RGaiyr2dszkRQSc6gKegnA&q=${action.q}`;
// const bookdata = axios.get(url).then((res) => {
// this.parseXMLResponse(res.data);
// console.log(this.state.books);
// });
// parseXMLResponse = response => {
//     const parser = new DOMParser();
//     const XMLResponse = parser.parseFromString(response, "application/xml");
//     const parseError = XMLResponse.getElementsByTagName("parsererror");
//     if (parseError.length) {
//         this.setState({
//             error: "There was an error fetching results.",
//             fetchingData: false
//         });
//     } else {
//         const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
//         const searchResults = XMLresults.map(result => this.XMLToJson(result));
//         this.setState({
//             posts: searchResults
//         });
//     }
// };
// XMLToJson = XML => {
//     const allNodes = new Array(...XML.children);
//     const jsonResult = {};
//     allNodes.forEach(node => {
//         if (node.children.length) {
//             jsonResult[node.nodeName] = this.XMLToJson(node);
//         } else {
//             jsonResult[node.nodeName] = node.innerHTML;
//         }
//     });
//     return jsonResult;
// };