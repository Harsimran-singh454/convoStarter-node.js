
async function getInsult() {
    let reqUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
    var response = await fetch(
      reqUrl,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  }
  
  
  async function getJoke(type) {
    let reqUrl = 'https://v2.jokeapi.dev/joke/'+type;
    var response = await fetch(
      reqUrl,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  }
  
  
  async function getQoute(type) {
    let reqUrl = 'https://zenquotes.io/api/'+type;
    var response = await fetch(
      reqUrl,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  }  
  
  async function getNews() {
    let reqUrl = 'https://newsdata.io/api/1/news?apikey=pub_26222b9004f46aaa5d61d2bf578bacc65c6ba&q=pegasus&language=en';
    var response = await fetch(
      reqUrl,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  }
  
  
  module.exports = {
    getInsult,
    getQoute,
    getJoke,
    getNews
  };