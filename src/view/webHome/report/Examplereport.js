
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {


    const doc = new jsPDF("p", "mm", "a4");


    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');

    let hpang = 10

    doc.rect(10,hpang,190*0.1,10)
    doc.text(10+((190*0.1)/2),hpang+(10/2),'no.','center')


    doc.rect(10+(190*0.1),hpang,190*0.1,10)
    doc.text(10+(190*0.1)+((190*0.1)/2),hpang+(10/2),'customer','center')


    doc.rect(10+(190*0.1)+(190*0.1),hpang,190*0.2,10)
    doc.text(10+(190*0.1)+(190*0.1)+((190*0.2)/2),hpang+(10/2),'product','center')


    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpang,190*0.2,10)
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)/2),hpang+(10/2),'item','center')


    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpang,190*0.2,10)
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpang+(10/2),'price','center')


    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpang,190*0.2,10)
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpang+(10/2),'Sum','center')



    hpang+=10
    let sumPrice = 0 
    let sumItemAndPrice = 0
    const NonRepeating = new Set();
  
    for(let index = 0; index< params.length; index++){
        const element = params[index];

        const sum = element.item.toString() * element.price.toString()
        sumItemAndPrice += sum
        sumPrice += element.price
        NonRepeating.add(element.customer);

    if(hpang > 280){
        doc.addPage()
        hpang = 10
    }


    if(index % 2 === 0){

        doc.setFillColor(30, 144, 225)
        doc.setDrawColor(0, 0, 0)
        doc.rect(10, hpang, 190 * 0.1, 10, 'DF')
        doc.text(10+((190*0.1)/2),hpang+(10/2),`${index+1}`,'center')
    
        doc.setFillColor(30, 144, 225)
        doc.setDrawColor(0, 0, 0)
        doc.rect(10+(190*0.1),hpang, 190 * 0.1 , 10,'DF')
        doc.text(10+(190*0.1),hpang+(10/2),element.customer,'left')


        doc.setFillColor(30, 144, 225)
        doc.setDrawColor(0, 0, 0)
        doc.rect(10+(190*0.1)+(190*0.1),hpang,190*0.2,10,'DF')
        doc.text(10+(190*0.1)+(190*0.1),hpang+(10/2),element.product,'left')


        doc.setFillColor(30, 144, 225)
        doc.setDrawColor(0, 0, 0)
        doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpang,190*0.2,10,'DF')
        doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)),hpang+(10/2),element.item.toString(),'right')


        doc.setFillColor(30, 144, 225)
        doc.setDrawColor(0, 0, 0)
        doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpang,190*0.2,10,'DF')
        doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpang+(10/2),element.price.toString(),'right');


        doc.setFillColor(30, 144, 225)
        doc.setDrawColor(0, 0, 0)
        doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpang,190*0.2,10,'DF')
        doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpang+(10/2),sum.toString(),'center')

        hpang+=10


        // console.log(element);

    }else{
        
        doc.rect(10,hpang,190*0.1,10)
        doc.text(10+((190*0.1)/2),hpang+(10/2),`${index+1}`,'center')
    

        doc.rect(10+(190*0.1),hpang,190*0.1,10)
        doc.text(10+(190*0.1),hpang+(10/2),element.customer,'left')


        doc.rect(10+(190*0.1)+(190*0.1),hpang,190*0.2,10)
        doc.text(10+(190*0.1)+(190*0.1),hpang+(10/2),element.product,'left')


        doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpang,190*0.2,10)
        doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)),hpang+(10/2),element.item.toString(),'right')


        doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpang,190*0.2,10)
        doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpang+(10/2),element.price.toString(),'right');


        doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpang,190*0.2,10)
        doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpang+(10/2),sum.toString(),'center')

        hpang+=10


        // console.log(element);
    }
    }

   
    let sumPrice2 = sumItemAndPrice/NonRepeating.size

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpang,190*0.2,10)
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpang+(10/2),sumPrice.toString(),'right');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpang,190*0.2,10)
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpang+(10/2),sumPrice2.toString(),'center')


window.open(doc.output('bloburl'))
   


}
    export default Examplereport;