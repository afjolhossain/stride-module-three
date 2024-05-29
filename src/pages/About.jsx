const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/03/How_To_Start_A_T-Shirt_Business_-_article_image.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About FUBOLUS Ltd!</h1>
          <p className="py-6">
            “FUBOLUS Ltd.” is an ultimate shopping destination where you can
            shop the widest selection of casual or luxurious; trendy, unique or
            traditional cloths and accessories delivered to you directly
            anywhere in Bangladesh. Daily lives, occasions, needs and
            necessities, celebrations, desires and wish lists – “FUBOLUS Ltd.”
            check it all off. We offer free returns and easy payment method. Our
            prime focus is the youth and we are here to be a part of their
            lives, not just by selling the brands which rest under their hood
            but also by writing a part of their daily life stories. We do not
            just sell lifestyle products, we are here to become a lifestyle!
            Follow us on Facebook and Twitter to stay updated about our latest
            offers and promotions.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
