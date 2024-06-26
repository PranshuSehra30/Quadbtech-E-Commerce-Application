import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row about-section">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="about"
            style={{ width: "100%" , height:"43%"}
        }
          /> <img
          src="/images/about2.png"
          alt="about"
          style={{ width: "100%" , height:"55%"}
      }
        />
        </div>
        <div className="col-md-6">
        <h1>
          <p class="section-title">QuadBtech was founded as a one stop digital solutions firm in Chandigarh. </p>
          </h1>
          <h1>About Quad B</h1>
          <p className="text-justify mt-2">
            Welcome to Quad B, your ultimate destination for all things e-commerce. At Quad B, we are committed to providing a seamless shopping experience, offering a diverse range of high-quality products to meet all your needs.
          </p>

          <h2>Our Mission</h2>
          <p className="text-justify mt-2">
            At Quad B, our mission is simple: to bring you the best products at unbeatable prices. We strive to make online shopping easy, enjoyable, and accessible for everyone. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we've got you covered.
          </p>

          <h2>Why Choose Quad B?</h2>
          <ul className="text-justify mt-2">
            <li><strong>Wide Selection:</strong> We offer a vast array of products across various categories, ensuring you'll always find what you're looking for.</li>
            <li><strong>Quality Assurance:</strong> We are dedicated to offering only the highest quality products. Our team meticulously selects and tests items to ensure they meet our stringent standards.</li>
            <li><strong>Competitive Prices:</strong> We believe in providing value for money. Our competitive pricing ensures you get the best deals without compromising on quality.</li>
            <li><strong>Excellent Customer Service:</strong> Our customer service team is here to assist you with any questions or concerns. We are committed to ensuring your shopping experience is smooth and satisfactory.</li>
            <li><strong>Secure Shopping:</strong> Your security is our priority. We use advanced encryption technologies to protect your personal and payment information, ensuring a safe and secure shopping experience.</li>
          </ul>

          <h2>Our Story</h2>
          <p className="text-justify mt-2">
            Founded in [Year], Quad B started with a vision to revolutionize the e-commerce landscape. Our founders, passionate about technology and innovation, set out to create a platform that combines convenience, variety, and excellent customer service. Over the years, we have grown into a trusted name in online retail, thanks to our loyal customers and dedicated team.
          </p>

          <h2>Our Values</h2>
          <ul className="text-justify mt-2">
            <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and work tirelessly to exceed their expectations.</li>
            <li><strong>Integrity:</strong> We believe in conducting our business with honesty and transparency.</li>
            <li><strong>Innovation:</strong> We constantly seek to innovate and improve our platform, ensuring a cutting-edge shopping experience.</li>
            <li><strong>Community:</strong> We are committed to giving back to the community and supporting sustainable practices.</li>
          </ul>

          <h2>Join Us on Our Journey</h2>
          <p className="text-justify mt-2">
            At Quad B, we are more than just a shopping destination; we are a community. We invite you to join us on our journey as we continue to grow and innovate. Follow us on social media, subscribe to our newsletter, and be the first to know about our latest products, special offers, and exciting updates.
          </p>

          <p className="text-justify mt-2">
            Thank you for choosing Quad B. Happy shopping!
          </p>
       
        </div>
      </div>
    </Layout>
  );
};

export default About;
