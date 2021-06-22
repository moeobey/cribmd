import { Component } from "@angular/core";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper/core";
SwiperCore.use([Autoplay, EffectCoverflow]);
@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent {
  swiper_slides = [
    { imageUrl: "assets/images/team/fortunate.png", name: "Fortunate Adediwura", role: "UI/UX Designer" },
    { imageUrl: "assets/images/team/vitalis.jpeg", name: "Ogbonna Vitalis", role: "Software Engineer" },
    { imageUrl: "assets/images/team/nicholas.png", name: "Mawuli King", role: "Software Engineer" },
    { imageUrl: "assets/images/team/ikechukwu.png", name: "Apeh Ikechukwu", role: "Software Engineer" },
    { imageUrl: "assets/images/team/feyisewa.jpeg", name: "Awotedu Feyisewa", role: "Software Engineer" },
    { imageUrl: "assets/images/team/moses.jpeg", name: "Ezechukwu Chibuike", role: "UI/UX Designer" },
    { imageUrl: "assets/images/team/seven.jpg", name: "Ani Emmanuel", role: "Mobile App Dev" },
    { imageUrl: "assets/images/team/valentine.png", name: "Ofoegbu Valentine", role: "Mobile App Dev" },
    { imageUrl: "assets/images/team/kingsley.jpeg", name: "Eze Ikechukwu", role: "Software Engineer" },
    { imageUrl: "assets/images/team/onyedika.jpg", name: "Edewor Onyedika", role: "Software Engineer" },
    { imageUrl: "assets/images/team/peter.png", name: "Ugwu Peter", role: "QA Tester" },
  ]
  advisors_slides = [
    { imageUrl: "assets/images/advisors/1.jpeg", name: "Lwazi Wali" },
    { imageUrl: "assets/images/advisors/2.png", name: "Dr Mina Mortezai" },
    { imageUrl: "assets/images/advisors/3.jpg", name: "Dr Kara Lee Pool" },
    { imageUrl: "assets/images/advisors/4.jpeg", name: "Dr Seeiso Koali" },
    { imageUrl: "assets/images/advisors/5.jpeg", name: "Cherry Miyake" },
    { imageUrl: "assets/images/advisors/6.jpeg", name: "Nnena Nkongho" },
    { imageUrl: "assets/images/advisors/7.jpeg", name: "Binyha Kesselly" },
    { imageUrl: "assets/images/advisors/8.jpeg", name: "Makeshoane Seeiso" },
    { imageUrl: "assets/images/advisors/9.jpg", name: "Sudesh Arora Adediwura" },
    { imageUrl: "assets/images/advisors/10.png", name: "Sen. ObieOmo-Agege" },
    { imageUrl: "assets/images/advisors/11.jpeg", name: "deoloye Olanrewaju" },
    { imageUrl: "assets/images/advisors/12.jpg", name: "Moses Awolowo" }
  ]

  doctors_contents = [
    {
      imageUrl: "assets/images/doctors/doc2.png",
      profession: "Dentist",
      name: "Dr. Tammy Maduabuchi",
      details: " Tammy is specialized in dental care and surgery. With over 8 years",
      read_more: "of practice under his belt, he has honed his skills and expertise in his niche. When he isn't attending to patients, he spends time with family, listening to country music and watching soccer.",
      toggleID:"moreDetails_5"
    },
    {
      imageUrl: "assets/images/doctors/doc5.png",
      profession: "Consultant",
      name: "Dr. Johnson Oladele",
      details: " A specialist in normal kidney operations and kidney diseases.",
      read_more: "The loss of one of his relatives to kidney failure inspired Johnson in becoming a Doctor. Johnson's colleagues describe him as a trailblazer and afriendly but no-nonsense medical practitioner.",
      toggleID:"moreDetails_6"
    },
    {
      imageUrl: "assets/images/doctors/doc3.png",
      profession: "Physiotherapist",
      name: "Dr. Ifeoluwa Badmus",
      details: "A specialist in the treatment of injury, disease and  disorders through physical methods",
      read_more: "such as exercise, massage, manipulation. She has over 5years experience in practice. She describes herself as having gifted hands with which she uses to move her patients from pain to comfort.",
      toggleID:"moreDetails_7"
     },
     {
      imageUrl: "assets/images/doctors/doc4.png",
      profession: "Consultant Cardiologist",
      name: "Dr. Adamu Mohammed",
      details: "Adamu - a specialist in heart-related illnesses and their treatment, graduated top of his class,",
      read_more: "bagging 12 out of 15 awards, then went on a scholarship to the USA, bagging a Masters in Public Health. His practice in Nigeria spans over a period of 10years. He is on course to becoming a Fellow at the West African College of Surgeons. He plans to one day set up an NGO to cater for children with heart diseases.",
      toggleID:"moreDetails_8"
    }
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

}
