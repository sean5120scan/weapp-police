import {fetch} from "../utils/https"
const User={
    getUserInfo: fetch("/getUserInfo")
}
module.exports={
    User:User
}

