import { LAY_CHI_TIET_PHIM, LAY_DANH_SACH_PHIM } from "../Constans/QuanLyPhimConstan"


const initialState = {
    dsPhim : [],
    chiTietPhim: {}
};

const QuanLyPhimReducer = (state = initialState, action )=> {
    switch (action.type) {

        case LAY_DANH_SACH_PHIM:{
            state.dsPhim = action.dsPhim;
            return { ...state, }
        };
        case LAY_CHI_TIET_PHIM:{
            state.chiTietPhim = action.chiTietPhim;
            return {...state}
        }
        default:{
            return state
        } 
    }

}
export default QuanLyPhimReducer;
