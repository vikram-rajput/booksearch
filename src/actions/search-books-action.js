import axios from "axios";
export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const FETCH_BOOK = "FETCH_BOOK";
const ROOT_URL =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com";
const API_KEY = "?key=RGaiyr2dszkRQSc6gKegnA";
const parseXMLResponse = response => {
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(response, "application/xml");
  const parseError = XMLResponse.getElementsByTagName("parsererror");
  if (parseError.length) {
    return null;
  } else {
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    const searchResults = XMLresults.map(result => XMLToJson(result));
    return searchResults;
  }
};
const XMLToJson = XML => {
  const allNodes = new Array(...XML.children);
  const jsonResult = {};
  allNodes.forEach(node => {
    if (node.children.length) {
      jsonResult[node.nodeName] = XMLToJson(node);
    } else {
      jsonResult[node.nodeName] = node.innerHTML;
    }
  });
  return jsonResult;
};
const getDescription = res => {
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(res.data, "application/xml");
  const parseError = XMLResponse.getElementsByTagName("parsererror");
  if (parseError.length) {
    return null;
  } else {
    // const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    // const workItem = XMLresults.map(result => XMLToJson(result));

    let title = XMLResponse.getElementsByTagName("original_title")[0].innerHTML;
    let image_url = XMLResponse.getElementsByTagName("image_url")[0].innerHTML;
    let description = XMLResponse.getElementsByTagName("description")[0].innerHTML;
    let publication_year = XMLResponse.getElementsByTagName("publication_year")[0].innerHTML;
    let author = XMLResponse.getElementsByTagName("publication_year")[0].innerHTML;
    let rating = XMLResponse.getElementsByTagName("average_rating")[0].innerHTML;
    
    // let rating = workItem[0].ratings_count;
    const bookdescription =  {
    image_url:image_url.replace("<![CDATA[", "").replace("]]>", ""),
    title:title.replace("<![CDATA[", "").replace("]]>", ""),
    description: description.replace("<![CDATA[", "").replace("]]>", ""),
    rating:rating.replace("<![CDATA[", "").replace("]]>", ""),
    author:author,
    publication_year:publication_year
  };
  return bookdescription;
  }
};
export function SearchBooks(q) {
  return dispatch => {
    return axios
      .get(`${ROOT_URL}/search/index.xml${API_KEY}&q=${q}`)
      .then(res => {
        dispatch({
          type: SEARCH_BOOKS,
          payload: parseXMLResponse(res.data)
        });
      });
  };
}
export function fetchBook(id) {
  return dispatch => {
    return axios.get(`${ROOT_URL}/book/show/${id}${API_KEY}`).then(res => {
      dispatch({
        type: FETCH_BOOK,
        payload: getDescription(res)
      });
    });
  };
}
