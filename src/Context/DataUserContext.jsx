import { createContext } from "react";
import getDataUSer from "../API/dataUser";

const token = localStorage.getItem("tokenUser")

const DataUserContext = createContext(getDataUSer(token))

export default DataUserContext