import { Component } from "@angular/core";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  error:any;
// customerOptions_new: OwlOptions={

//   }
review_slides = [
  {image_url:"assets/images/reviews/layomi-adebayo.webp",
   comment:"Through the CribMD platform, I have been able to keep my treatment on track and maintain a safe health level I feel comfortable with.",
  customer_name:"Layomi Adebayo"
  },
  {image_url:"assets/images/reviews/kolade-williams.webp",
   comment:"CribMD was able to save me the time and stress of going to the hospital while delivering excellent services.",
  customer_name:"Kolade Willaims"
  },
  {image_url:"assets/images/reviews/ngozi-chillion.webp",
   comment:"Being able to chat with a doctor from my home during the Pandemic has been awesome.Thank you CribMD. ",
  customer_name:"Ngozi Chillion"
  },
  {image_url:"assets/images/reviews/chris-benjamin.webp",
   comment:"My experience when a doctor showed up at my home for a doctor-house-call went smooth.Thank you CribMD.",
  customer_name:"Chris Benjamin"
  }
]

news_slides = [
  {
    image_link:"assets/images/news/techawk-logo.webp",
    content:"Nigerian Healthtech Startup, CribMD Secures $2.6m Funding For Product Growth & Expansion",
    url:"https://www.techawkng.com/2021/05/26/nigerian-healthtech-startup-cribmd-secures-2-6m-funding-for-product-expansion/amp/?__twitter_impression=true",
    outlet:"Techawk",
    isVideo:false
  },
  {
    image_link:"assets/images/reviews/chris-benjamin.webp",
    content:"Nigerian Healthtech Startup, CribMD Secures $2.6m Funding For Product Growth & Expansion",
    url:"https://www.techawkng.com/2021/05/26/nigerian-healthtech-startup-cribmd-secures-2-6m-funding-for-product-expansion/amp/?__twitter_impression=true",
    outlet:"Techawk"
  },
  {
    image_link:"assets/images/reviews/chris-benjamin.webp",
    content:"Nigerian Healthtech Startup, CribMD Secures $2.6m Funding For Product Growth & Expansion",
    url:"https://www.techawkng.com/2021/05/26/nigerian-healthtech-startup-cribmd-secures-2-6m-funding-for-product-expansion/amp/?__twitter_impression=true",
    outlet:"Techawk"
  },

]
links = [
  {url:"assets/images/partners/partner_1.webp"},
  {url:"assets/images/partners/partner_2.webp"},
  {url:"assets/images/partners/partner_3.webp"},
  {url:"assets/images/partners/partner_4.webp"},
  {url:"assets/images/partners/partner_5.webp"},
  {url:"assets/images/partners/partner_6.webp"},
  {url:"assets/images/partners/partner_7.webp"},
  {url:"assets/images/partners/partner_8.webp"},
  {url:"assets/images/partners/partner_9.webp"},
  {url:"assets/images/partners/partner_10.webp"},
  {url:"assets/images/partners/partner_11.webp"},
  {url:"assets/images/partners/partner_12.webp"},
  {url:"assets/images/partners/partner_13.webp"},
  {url:"assets/images/partners/partner_14.webp"},
  {url:"assets/images/partners/partner_15.webp"},
  {url:"assets/images/partners/partner_16.webp"},
  {url:"assets/images/partners/partner_17.webp"},
  {url:"assets/images/partners/partner_18.webp"},
  {url:"assets/images/partners/partner_19.webp"},
  {url:"assets/images/partners/partner_20.webp"},
  {url:"assets/images/partners/partner_21.webp"},
  {url:"assets/images/partners/partner_22.webp"},
  {url:"assets/images/partners/partner_23.webp"},

]
  constructor(){
  }



}
