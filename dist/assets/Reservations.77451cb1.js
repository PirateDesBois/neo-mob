import{_,o as c,c as v,w as t,a as e,V as N,i as s,j as C,k,l as E,n as S,p as x,r as y,F as L,q as g,s as V,t as T,v as r,x as u,y as b,z as I}from"./index.8b8e9ab4.js";import{V as R,a as B,b as F,c as j,d as i,e as J}from"./VTextField.7ec88c52.js";import{b as f,a as m,V as D}from"./VRow.03df357d.js";const U={data(){return{newReservation:{clientName:"",clientEmail:"",reservation:{startDate:null,endDate:null},vehicle:""},reservations:[]}},methods:{addReservation(){this.reservations.push({...this.newReservation}),this.saveReservationsToLocalStorage(),alert("Reservation added successfully !"),console.log("Reservation added successfully !"),this.newReservation={clientName:"",clientEmail:"",reservation:{startDate:null,endDate:null},vehicle:""}},deleteReservation(o){this.reservations.splice(o,1),this.saveReservationsToLocalStorage(),console.log("Reservation deleted successfully !")},saveReservationsToLocalStorage(){localStorage.setItem("reservations",JSON.stringify(this.reservations))},loadReservationsFromLocalStorage(){const o=localStorage.getItem("reservations");o&&(this.reservations=JSON.parse(o))}},computed:{filteredReservations(){return this.reservations.filter(o=>o.reservation.startDate!==null)}},mounted(){this.reservations=[{clientName:"John",clientEmail:"john@example.com",reservation:{startDate:"2023-03-24",endDate:"2023-03-26"},vehicle:"Car"},{clientName:"Jane",clientEmail:"jane@example.com",reservation:{startDate:"2023-03-25",endDate:"2023-03-27"},vehicle:"Bike"},{clientName:"Joe",clientEmail:"joe@example.com",reservation:{startDate:"2023-03-25",endDate:"2023-03-25"},vehicle:"scooter"},{clientName:"Samy",clientEmail:"Samy@example.com",reservation:{startDate:"2023-03-26",endDate:"2023-03-26"},vehicle:"MonoWheel"},{clientName:"Calvin",clientEmail:"Calvin@example.com",reservation:{startDate:"2023-03-28",endDate:"2023-03-29"},vehicle:"Bike"}],this.loadReservationsFromLocalStorage()}};function A(o,l,h,w,n,d){return c(),v(g,null,{default:t(()=>[e(C,{app:"",color:"purple-darken-2",dark:""},{default:t(()=>[e(N,null,{default:t(()=>[s(" Reservation list ")]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(R,{class:"mt-15"},{default:t(()=>[e(B,null,{default:t(()=>[s(" New Reservation ")]),_:1}),e(F,null,{default:t(()=>[e(j,null,{default:t(()=>[e(i,{modelValue:n.newReservation.clientName,"onUpdate:modelValue":l[0]||(l[0]=a=>n.newReservation.clientName=a),label:"Client Name"},null,8,["modelValue"]),e(i,{modelValue:n.newReservation.clientEmail,"onUpdate:modelValue":l[1]||(l[1]=a=>n.newReservation.clientEmail=a),label:"Client Email"},null,8,["modelValue"]),e(f,null,{default:t(()=>[e(m,{cols:"6"},{default:t(()=>[e(i,{modelValue:n.newReservation.reservation.startDate,"onUpdate:modelValue":l[2]||(l[2]=a=>n.newReservation.reservation.startDate=a),type:"date",label:"Start Date"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(i,{modelValue:n.newReservation.reservation.endDate,"onUpdate:modelValue":l[3]||(l[3]=a=>n.newReservation.reservation.endDate=a),type:"date",label:"End Date"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{modelValue:n.newReservation.vehicle,"onUpdate:modelValue":l[4]||(l[4]=a=>n.newReservation.vehicle=a),label:"Vehicle"},null,8,["modelValue"]),e(k,{color:"purple-darken-2",onClick:d.addReservation},{default:t(()=>[s("Add")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(E,{class:"my-4"}),e(S,null,{default:t(()=>[(c(!0),x(L,null,y(d.filteredReservations,(a,p)=>(c(),v(V,{key:p},{default:t(()=>[e(f,null,{default:t(()=>[e(m,null,{default:t(()=>[e(R,{class:"px-3 py-2",theme:"dark"},{default:t(()=>[e(V,null,{default:t(()=>[e(T,null,{default:t(()=>[s("Name : "+r(a.clientName),1)]),_:2},1024),e(u,null,{default:t(()=>[s("Email: "+r(a.clientEmail),1)]),_:2},1024),e(u,null,{default:t(()=>[s("Reservation Start Date: "+r(a.reservation.startDate),1)]),_:2},1024),e(u,null,{default:t(()=>[s("Reservation End Date: "+r(a.reservation.endDate),1)]),_:2},1024),e(u,null,{default:t(()=>[s("Vehicle: "+r(a.vehicle),1)]),_:2},1024)]),_:2},1024),e(J,{class:"justify-end"},{default:t(()=>[e(b,{class:"deleteIcon",onClick:M=>d.deleteReservation(p)},{default:t(()=>[s("mdi-delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}const O=_(U,[["render",A]]),q={components:{ReservationList:O}};function z(o,l,h,w,n,d){const a=I("ReservationList");return c(),v(D,null,{default:t(()=>[e(f,null,{default:t(()=>[e(m,null,{default:t(()=>[e(a)]),_:1})]),_:1})]),_:1})}const K=_(q,[["render",z]]);export{K as default};
