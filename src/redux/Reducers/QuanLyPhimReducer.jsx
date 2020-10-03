import { LAY_DANH_SACH_PHIM } from "../Constans/QuanLyPhimConstan"


const initialState = {
    dsPhim : []
};

const QuanLyPhimReducer = (state = initialState, action )=> {
    switch (action.type) {

        case LAY_DANH_SACH_PHIM:{
            state.dsPhim = action.dsPhim;
            return { ...state, }
        };
        
        default:{
            return state
        } 
    }

}
export default QuanLyPhimReducer;
