import axios from 'axios';
import {Component} from 'react';
import { useCookies } from 'react-cookie';

class testAPI extends Component {
    state = { 'greetings':'' , 'id': ''}
    async componentDidMount(){
        function readCookie() {
            var ca = document.cookie.split(';');
            console.log("all cookies", ca);
            let cookie = ca.filter((cookie)=>cookie.match(/spaSession/))[0].split("=")[1];
            console.log(cookie);
            return cookie;
        }

    if(document.cookie !== ''){
        let cookie = readCookie('spaSession')

        window.localStorage.setItem("accessToken",cookie);
    }

    // this.setState({id:etag }) 
    // this.setState({greetings:data.result.Greetings }) 
    }

    render() {
        return (
        <>
        
        <div>THE REACT SPA </div>
        <button onClick= {()=> {
            let date = new Date();
            date.setTime(date.getTime() + (3000));
            const expires = "expires=" + date.toUTCString();
            let cookie = "tempAccessToken=" +window.localStorage.getItem('accessToken') + ";" + expires;

        document.cookie = cookie; window.location.href = "http://localhost:3000/getAccessToken"}}>Redirect to auth server !</button>
        </>);
    }
}
 
export default testAPI;