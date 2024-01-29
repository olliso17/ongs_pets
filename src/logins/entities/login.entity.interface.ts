export default interface LoginEntityInterface{
    get token():string
    get user_id():string
    get localhost():string
    validationLogin()
}