import React from "react";
import ErinWayne from "../../images/erinwayneimages/ew27.jpg";
import ErinWayneNameLogo from "../../images/testimonialimages/erinwayne.png";

import EmmaJono from "../../images/emmajonoimages/ej2.jpg";
import EmmaJonoNameLogo from "../../images/testimonialimages/emmajono.png";

import BanishaThomas from "../../images/banishathomasimages/bt18.jpg";
import BanishaNameLogo from "../../images/testimonialimages/banisha.png";
import ThomasNameLogo from "../../images/testimonialimages/thomas.png";

import LaryJack from "../../images/laryjackimages/lj13.jpg";
import LarryJackNameLogo from "../../images/testimonialimages/laryjack.png";

import SheenaBen from "../../images/sheenabenimages/sb15.jpg";
import SheenaBenNameLogo from "../../images/testimonialimages/sheenaben.png";

import "../../styles/testimonialsstyles.css";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonials__wrapper">
        <div className="testimonial__wrapper">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${ErinWayne})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              height: "700px",
              width: "700px",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "Working with Kali Photography was a phenomenal experience as she
              made it comfortable for us both to be ourselves. She also
              coached/directed poses for us to do which made it easy. I admired
              her honesty and commentary during the shoot. We had such great
              laughs as if we knew each other before. Kali Photography has a
              unique eye and vision that aligns with the ideas that we proposed.
              The result was definitely worth a lifetime to print or keep as a
              screensaver for both of us. Thank you for cherishing and capturing
              our true moments as a couple. I would highly recommend you book
              with her if you are a couple or even an individual."
            </p>
            <img
              className="nameslogo"
              src={ErinWayneNameLogo}
              alt="erinwaynenames"
            />
          </div>
        </div>

        <div className="testimonial__wrapper marLeft">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${EmmaJono})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              height: "700px",
              width: "700px",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "Thank you so so much for your gorgeous photographs! I can’t
              believe how talented you are. You made us both feel so comfortable
              and we had a great time with you. Showing us what to do and
              directing us on how to pose was so helpful and made us feel so
              much less awkward. The photos we got at the end of it was better
              than anything I could’ve hoped for. I would definitely recommend
              Kali Photography for anyone who wants some photos that they can
              both feel comfortable and look good in."
            </p>
            <img
              className="nameslogo"
              src={EmmaJonoNameLogo}
              alt="emmajononames"
            />
          </div>
        </div>

        <div className="testimonial__wrapper marLeft">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${BanishaThomas})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "700px",
              width: "700px",
              filter: "blur(.5px)",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "My experience working with Tiara was amazing! She was so
              professional and sweet, ensuring that my comfort was always
              prioritised. I am also so in love with how pictures came out!
              She’s absolutely incredible."
            </p>
            <img
              className="banishanameslogo"
              src={BanishaNameLogo}
              alt="banishaname"
            />

            <p className="client_statement">
              "It was very good shooting with Kali. She was very professional
              and accommodating. She directed us with ease and made us feel like
              actual models!"
            </p>
            <img
              className="thomasnameslogo"
              src={ThomasNameLogo}
              alt="thomasname"
            />
          </div>
        </div>

        <div className="testimonial__wrapper marLeft">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${LaryJack})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "700px",
              width: "700px",
              filter: "blur(.5px)",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "The day I met Tiara was the loveliest surprise! Pulling me aside
              from my regular day, she made me feel beautiful enough to be
              photographed. And even more can be said about the photoshoot with
              my husband. As we were walking around the big gardens she made us
              feel so comfortable to enjoy ourselves and let her do what she
              does best. Her comments, her encouragement, and her honest joy to
              be there and take pictures made us feel so happy. The results were
              even better than we even expected! They were romantic and sweet,
              and it reminds us everytime we look at them of our happiness
              together. A big plus was all the compliments we got for them!
              Thank you so much once again! I really can't say that enough!"
            </p>
            <img
              className="nameslogo"
              src={LarryJackNameLogo}
              alt="larryjacknames"
            />
          </div>
        </div>

        <div className="testimonial__wrapper marLeft">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${SheenaBen})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              height: "700px",
              width: "700px",
              filter: "blur(.5px)",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "Thank you Tiara for your awesome photographs that me and my
              family will cherish in our lifetime. Tiara captures intimate
              moments that not many people can see. She has plenty of ideas
              which she communicates well and made us feel very comfortable. She
              is friendly, non judgemental and easy to get along with. The
              photos turned out great and we love it so much! Thank you once
              again!."
            </p>
            <img
              className="nameslogo"
              src={SheenaBenNameLogo}
              alt="sheenabennames"
            />
          </div>
        </div>

        <div className="testimonial__wrapper marLeft">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${ErinWayne})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              height: "700px",
              width: "700px",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "Working with Kali Photography was a phenomenal experience as she
              made it comfortable for us both to be ourselves. She also
              coached/directed poses for us to do which made it easy. I admired
              her honesty and commentary during the shoot. We had such great
              laughs as if we knew each other before. Kali Photography has a
              unique eye and vision that aligns with the ideas that we proposed.
              The result was definitely worth a lifetime to print or keep as a
              screensaver for both of us. Thank you for cherishing and capturing
              our true moments as a couple. I would highly recommend you book
              with her if you are a couple or even an individual."
            </p>
            <img
              className="nameslogo"
              src={ErinWayneNameLogo}
              alt="erinwaynenames"
            />
          </div>
        </div>

        <div className="testimonial__wrapper marLeft">
          <div
            className="testimonial-one"
            style={{
              backgroundImage: `url(${EmmaJono})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              height: "700px",
              width: "700px",
            }}
          ></div>
          <div>
            <p className="client_statement">
              "Thank you so so much for your gorgeous photographs! I can’t
              believe how talented you are. You made us both feel so comfortable
              and we had a great time with you. Showing us what to do and
              directing us on how to pose was so helpful and made us feel so
              much less awkward. The photos we got at the end of it was better
              than anything I could’ve hoped for. I would definitely recommend
              Kali Photography for anyone who wants some photos that they can
              both feel comfortable and look good in."
            </p>
            <img
              className="nameslogo"
              src={EmmaJonoNameLogo}
              alt="emmajononames"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
