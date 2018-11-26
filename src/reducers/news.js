import { GET_NEWS } from '../actions/news';

// const newsState = [{
//   "title": "2 MUIC Successfully Stages Open House 2018",
//   "date": "2018-11-23T08:56:13+00:00",
//   "content": "Numerous activities included an exhibition highlighting MUIC’s 16 academic majors; a talk show entitled “Drawing Your Future” where MUIC’s famous alumni and current students such as Ms. Cherprang Areekul from popular girl group BNK48; and Ms. Monica Singh, Managing Director & Founder of G.M.L. Group Co.,Ltd., Bangkok and recipient of the Asia Youth Women Netizen Marketing Excellence Award from Asian Marketing Federation, shared their thoughts and experiences about MUIC; with another alumna, Ms. Napatrostorn Tanathanyatoranun, Business Analyst from Samsung Electronics and Partnership Consultant for TEDxBangkok, serving as the emcee; activities and exhibitions by MUIC Student Association and clubs; Mock Interview; Mock Listening Test; Mock Classrooms; Building and Facilities Tour led by MUIC students; along with games and lucky draws.",
//   "photo": "https://mahidol.ac.th/temp/2018/11/op_muic03.jpg"
// }, {
//   "title": "MUIC Successfully Stages Open House 2019",
//   "date": "2018-11-23T08:56:13+00:00",
//   "content": "Numerous activities included an exhibition highlighting MUIC’s 16 academic majors; a talk show entitled “Drawing Your Future” where MUIC’s famous alumni and current students such as Ms. Cherprang Areekul from popular girl group BNK48; and Ms. Monica Singh, Managing Director & Founder of G.M.L. Group Co.,Ltd., Bangkok and recipient of the Asia Youth Women Netizen Marketing Excellence Award from Asian Marketing Federation, shared their thoughts and experiences about MUIC; with another alumna, Ms. Napatrostorn Tanathanyatoranun, Business Analyst from Samsung Electronics and Partnership Consultant for TEDxBangkok, serving as the emcee; activities and exhibitions by MUIC Student Association and clubs; Mock Interview; Mock Listening Test; Mock Classrooms; Building and Facilities Tour led by MUIC students; along with games and lucky draws.",
//   "photo": "https://mahidol.ac.th/temp/2018/11/op_muic03.jpg"
// }];

const newsState = [];

export default function reducer(state = newsState, action) {
  switch (action.type) {
    case GET_NEWS:
      return action.news
    default:
      return state;
  }
}