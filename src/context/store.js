import React, { createContext, useState } from 'react';
import data from '../data/data'
export const Store = createContext();
const StoreContext = ({children}) => {
    let [msg, setMsg] = useState(0);
    let [note, setNote] = useState("LIST OF ALL PRODUCTS");
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [image, setImage] = useState('');
    let [ids, setIds] = useState(null);
    let [cart, setCart] = useState([]);
    let [product, setProduct] = useState(data.cloths);
    let [,wow] = useState();
    let [length, setLength] = useState("");
    let [waist, setWaist] = useState('');
    let [arm, setArm] = useState('');
    let [chestW, setChestW] = useState('');

let state = {
    info: [msg, setMsg],
    data: [note, setNote],
    storeImg: [image, setImage],
    storeName: [name, setName],
    storePrice:[price, setPrice],
    storeProduct: [product, setProduct],
    storeId: [ids,setIds],
    func: [, wow],
    ctx: [cart, setCart],
    storeLength: [length, setLength],
    storeWaist: [waist, setWaist] ,
    storeArm:  [arm, setArm],
    storeChestW: [chestW, setChestW]
};
    return <Store.Provider value={state}>{children}</Store.Provider>
}
export default StoreContext;