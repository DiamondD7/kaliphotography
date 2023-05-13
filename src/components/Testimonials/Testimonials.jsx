import React from "react";
import ErinWayne from "../../images/erinwayneimages/ew27.jpg";
import ErinWayneNameLogo from "../../images/testimonialimages/erinwayne.png";

import "../../styles/testimonialsstyles.css";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonials__wrapper">
        <div className="first-testimonial__wrapper">
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
            <p className="erinwayne_statement">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quasi maiores magni quibusdam, voluptatem ipsa pariatur, totam
              dolorem odio quia obcaecati. Porro, animi? Similique fuga
              provident, qui tenetur id odio! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Expedita aut esse quasi hic repellat
              molestiae accusamus. Nemo dicta reprehenderit vero saepe! Quia hic
              maxime magnam ipsam consequuntur excepturi nobis qui? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quam velit nemo
              ipsum, quasi officia impedit, aliquam laboriosam perspiciatis
              molestiae rerum commodi iusto ex voluptatibus fugit voluptates!
              Nulla dolores ipsa corporis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis vel explicabo, error delectus
              dolores adipisci laudantium! Rem aperiam natus rerum adipisci
              animi, quod ipsum sequi sed, dicta dolores, repellendus quae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quibusdam explicabo accusantium voluptatum expedita nisi sed!
              Eaque perspiciatis nihil quae ducimus inventore cum velit, dolore
              nemo quas praesentium, at libero. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Tenetur corporis modi vel provident
              nisi libero inventore alias quas explicabo earum praesentium
              repellendus quos, dolorum consequuntur atque exercitationem?
              Temporibus, minus rem. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Reprehenderit sint quibusdam quae fugiat natus
              nam. Maxime deleniti, architecto fugiat iusto sint molestias dicta
              possimus eum dolore, numquam quas culpa reprehenderit.
            </p>
            <img
              className="nameslogo"
              src={ErinWayneNameLogo}
              alt="erinwaynenames"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
