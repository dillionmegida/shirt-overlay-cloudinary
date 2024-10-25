import {
  Cloudinary,
  CloudinaryImage,
  Transformation,
} from "@cloudinary/url-gen";
import { opacity } from "@cloudinary/url-gen/actions/adjust";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image, text } from "@cloudinary/url-gen/qualifiers/source";
import { focusOn, autoGravity, compass } from "@cloudinary/url-gen/qualifiers/gravity";
import {
  crop,
  fill,
  scale,
  thumbnail,
} from "@cloudinary/url-gen/actions/resize";
import { position } from "@cloudinary/url-gen/qualifiers/timeline";
import { Position } from "@cloudinary/url-gen/qualifiers";
import { AdvancedImage } from "@cloudinary/react";
import { size } from "@cloudinary/url-gen/qualifiers/textFit";
import { color } from "@cloudinary/url-gen/qualifiers/background";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { solid } from "@cloudinary/url-gen/qualifiers/textStroke";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

const LOGO_PUBLIC_ID = "overlay-demo/charity-logo";
// const LOGO_PUBLIC_ID ='overlay-demo/cld-logo'

// First shirt example with logo
const demoImage = cld.image("overlay-demo/black-shirt");

demoImage.resize(thumbnail().width(1000));

demoImage.overlay(
  source(
    image(LOGO_PUBLIC_ID).transformation(
      new Transformation().resize(scale().width(0.3)).adjust(opacity(50)),
    ),
  ).position(new Position().offsetY(70)),
);

// Second shirt example with logo
// const demoImage = cld.image("overlay-demo/white-shirt");

// demoImage.resize(thumbnail().width(1000));

// demoImage.overlay(
//   source(
//     image(LOGO_PUBLIC_ID).transformation(
//       new Transformation().resize(scale().width(0.1)).adjust(opacity(50)),
//     ),
//   ).position(new Position().offsetX(40).offsetY(-60)),
// );

// Third example overlay text
// const demoImage = cld.image("overlay-demo/white-shirt");
// // const demoImage = cld.image("overlay-demo/black-shirt");

// demoImage.resize(thumbnail().width(1000));

// demoImage.overlay(
//   source(
//     text("On Sale", new TextStyle("Arial", 60))
//       .textColor("red")
//       .transformation(new Transformation().addFlag("text_no_trim").border(solid(6, "red"))),
//   ).position(new Position().gravity(compass('north_east')).offsetX(50).offsetY(50)),
// );

// const imageUrl = demoImage.toURL();

function App() {
  return (
    <div className="image-block">
      <AdvancedImage cldImg={demoImage} />
    </div>
  );
}

export default App;
