import Axios from "axios"
import { LAY_DANH_SACH_PHIM, LAY_CHI_TIET_PHIM } from "../Constans/QuanLyPhimConstan";



export const layDanhSachPhimApiAction = () => {
    return async dispatch =>{
        try {
            const {data,status} = await Axios({
                url :'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method:'GET'
            });
            if (status === 200){
                const action = {
                    type : LAY_DANH_SACH_PHIM,
                    dsPhim : data
                }
                dispatch(action)
            }
        }catch(err){
            console.log(err.response.data);
        } 
    }
}
export const layChiTietPhimApiAction = (maPhim) =>{
    return async (dispatch)=>{
        try{
            const {data,status} = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            if(status == 200){
                const action = {
                    type: LAY_CHI_TIET_PHIM,
                    chiTietPhim : data
                }
                dispatch(action);
            }
        }catch(err){
            console.log(err.response.data);
        }
    }
}