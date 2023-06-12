import { Component, OnInit } from '@angular/core';

export interface  product {
  id: number;
  name: string;
  campaign:{
    id: number,
    name: string
  } ;
  image : string;
  price:number;
  discount:number;
  quantity: number;
  status: number;
  created_at: string;
  updated_at: string;
  user:{
    user_name:string;
  }


  }


@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.scss']
})
export class BodyContainerComponent implements OnInit {

  products: product[] = [
    { 
      id: 1,
      image: 'image 1',
      name:'Nhan kim cuong',
      campaign: {
        id: 1,
        name: 'campaign name'
      },
      price: 1234,
      discount: 8,
      quantity: 10,
      status: 1,
      created_at: '2023-12-01',
      updated_at: '2023-12-12',
      user: {
        user_name: 'admin'
      }
    },  
    {
      id: 2,
      image: 'image 2',
      name:'Nhan kim cuong',
      campaign: {
        id: 1,
        name: 'campaign name1'
      },
      price: 1234,
      discount: 8,
      quantity: 10,
      status: 2,
      created_at: '2023-12-01',
      updated_at: '2023-12-12',
      user: {
        user_name: 'admin'
      }
    },  {
      id: 3,
      image: 'image 3',
      name:'Nhan kim cuong',
      campaign: {
        id: 1,
        name: 'campaign name2'
      },
      price: 1234,
      discount: 8,
      quantity: 10,
      status: 0,
      created_at: '2023-12-01',
      updated_at: '2023-12-12',
      user: {
        user_name: 'admin'
      }
    },  {
      id: 4,
      image: 'image 4',
      name:'Nhan kim cuong',
      campaign: {
        id: 1,
        name: 'campaign name3'
      },
      price: 1234,
      discount: 8,
      quantity: 0,
      status: 3,
      created_at: '2023-12-01',
      updated_at: '2023-12-12',
      user: {
        user_name: 'admin'
      }
    },  {
      id: 5,
      image: 'image 5',
      name:'Nhan kim cuong',
      campaign: {
        id: 1,
        name: 'campaign name4'
      },
      price: 1234,
      discount: 8,
      quantity: 10,
      status: 1,
      created_at: '2023-12-01',
      updated_at: '2023-12-12',
      user: {
        user_name: 'admin'
      }
    },  {
      id: 6,
      image: 'image 6',
      name:'Nhan kim cuong',
      campaign: {
        id: 1,
        name: 'campaign name5'
      },
      price: 1234,
      discount: 8,
      quantity: 10,
      status: -1,
      created_at: '2023-12-01',
      updated_at: '2023-12-12',
      user: {
        user_name: 'admin'
      }
    }
  ];

  Danhmuc : {id: number , name: string,}[]=[
    {id:1 , name: 'phụ kiện' },
    {id:2, name:'Thiết bị điện tử'}, 
    {id:3 , name:'Giáo dục'}, 
    {id:4, name: 'thời trang & phụ kiện'}, 
    {id:5 , name: 'thời trang trẻ em'}, 
    {id:6 , name: 'làm đẹp'}
   ]


   Brand: {id: number, name:string}[] = [
    {id:1 , name: 'nike' },
    {id:2, name:'adidas'}, 
    {id:3 , name:'zara'}, 
    {id:4, name: 'drew'}, 
    {id:5 , name: 'H&M'}, 
    {id:6 , name: 'hapaco'}
   
   ]
   Supplier : {id: number , name: string,}[]=[
    {id:1 , name: 'Supplier 1' },
    {id:2, name:'Supplier 2'}, 
    {id:3 , name:'Supplier 3'}, 
    {id:4, name: 'Supplier4'}, 
    {id:5 , name: 'Supplier5'}, 
    {id:6 , name: 'Supplier 6'}
   ]
   Campaign : {id: number , name: string,}[]=[
    {id:1 , name: 'Campaign1' },
    {id:2, name:'Campaign2'}, 
    {id:3 , name:'Campaign3'}, 
    {id:4, name: 'Campaign4'}, 
    {id:5 , name: 'Campai223344'}, 
    {id:6 , name: 'Campaign5'}
   ]
   Hot : {id: number , name: string,}[]=[
    {id:1 , name: 'Hot1' },
    {id:2, name:'Hot2'}, 
    {id:3 , name:'Hot3'}, 
    {id:4, name: 'Hot4'}, 
    {id:5 , name: 'Hot5'}, 
    {id:6 , name: 'Hot6'}
   ]
   Position : {id: number , name: string,}[]=[
    {id:1 , name: 'Position1' },
    {id:2, name:'Position2'}, 
    {id:3 , name:'Position3'}, 
    {id:4, name: 'Position4'}, 
    {id:5 , name: 'Position5'}, 
    {id:6 , name: 'Position6'}
   ]
   Sort_By : {id: number , name: string,}[]=[
    {id:1 , name: 'Sort_By1' },
    {id:2, name:'Sort_By2'}, 
    {id:3 , name:'Sort_By3'}, 
    {id:4, name: 'Sort_By4'}, 
    {id:5 , name: 'Sort_By5'}, 
    {id:6 , name: 'Sort_By6'}
   ]

  selectedbrand: any;
  selectedcategory: any;
  selectedhot: any;
  selectedsupplier : any;
  selectedcampaign : any;
  selectedposition : any;
  selectedsortby   :  any;

  ngOnInit(): void {
      
  }

  constructor(){
   
     }
    
  
  StatustSuccess(){
    
}

    filterStatus(status?: any) {
      console.log(status)
    }
    
}
