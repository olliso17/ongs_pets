export default interface LoginInterface{
    get token():string;
    get user_id():string;
    get localhost():string;
    validationLogin();
}