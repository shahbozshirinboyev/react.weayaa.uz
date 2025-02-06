import axios from "axios";

const token = "7756740360:AAFPLRzyGDHIsj3hrM9GV8VDJwm_HLIJ6Xg";
const http = axios.create({ baseURL: `https://api.telegram.org/bot${token}`, });
// const chatId = "660100854"; //@sh_shirinboyev
const chatId = "6729068990";    //@tommykim_uz

export { http, chatId };